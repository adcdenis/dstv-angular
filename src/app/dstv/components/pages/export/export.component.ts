import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { forkJoin, take } from 'rxjs';
import { ClienteService } from 'src/app/dstv/service/cliente.service';
import { PlanoService } from 'src/app/dstv/service/plano.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';
import * as FileSaver from 'file-saver';

@Component({
    templateUrl: './export.component.html',
    providers: [MessageService],
    standalone: false
})
export class ExportComponent {

    loading: boolean = false;
    importing: boolean = false;
    importSummary: { total: number; novos: number; editados: number; invalidos: number } | null = null;

    constructor(
        private clienteService: ClienteService,
        private planoService: PlanoService,
        private servidorService: ServidorFireService,
        private messageService: MessageService
    ) { }

    private toIsoDate(input: any): string {
        if (!input) return '';
        if (input instanceof Date) return input.toISOString();
        if (input.seconds) return new Date(input.seconds * 1000).toISOString();
        const d = new Date(input);
        return isNaN(d.getTime()) ? '' : d.toISOString();
    }

    exportarJson() {
        this.loading = true;
        forkJoin({
            clientes: this.clienteService.getAll().pipe(take(1)),
            planos: this.planoService.getAll().pipe(take(1)),
            servidores: this.servidorService.getAll().pipe(take(1))
        }).subscribe({
            next: (data) => {
                const clientes = (data.clientes || []).map((c: any) => ({
                    ...c,
                    dataVencimento: this.toIsoDate(c.dataVencimento)
                }));
                const payload = { clientes, planos: data.planos || [], servidores: data.servidores || [] };
                const json = JSON.stringify(payload, null, 2);
                const blob = new Blob([json], { type: 'application/json' });
                FileSaver.saveAs(blob, `dstv_export_${new Date().getTime()}.json`);

                this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Exportação concluída!' });
                this.loading = false;
            },
            error: (err) => {
                console.error(err);
                this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao exportar dados.' });
                this.loading = false;
            }
        });
    }

    importarJson(event: any) {
        const file: File = event?.files?.[0] || event?.target?.files?.[0];
        if (!file) return;
        this.importing = true;
        const reader = new FileReader();
        reader.onload = async () => {
            try {
                const text = String(reader.result || '');
                const data = JSON.parse(text);
                const clientesImport: any[] = Array.isArray(data?.clientes) ? data.clientes : [];
                const existentes = await this.clienteService.getAll().pipe(take(1)).toPromise();
                let total = 0, novos = 0, editados = 0, invalidos = 0;
                const ops: Promise<any>[] = [];
                for (const raw of clientesImport) {
                    const nome = (raw?.nome || '').trim();
                    const vencIso = raw?.dataVencimento || '';
                    if (!nome || !vencIso) { invalidos++; continue; } // campos obrigatórios
                    total++;
                    const vencDate = new Date(vencIso);
                    if (isNaN(vencDate.getTime())) { invalidos++; continue; }
                    const existente = (existentes || []).find((c: any) => (c.nome || '').trim() === nome);
                    const base = {
                        nome,
                        dataVencimento: vencDate,
                        usuario: raw?.usuario || '',
                        email: raw?.email || '',
                        telefone: raw?.telefone || '',
                        observacao: raw?.observacao || '',
                        servidor: raw?.servidor || null,
                        plano: raw?.plano || null
                    };
                    if (existente && existente.id) {
                        ops.push(this.clienteService.update({ ...existente, ...base }));
                        editados++;
                    } else {
                        ops.push(this.clienteService.create(base as any));
                        novos++;
                    }
                }
                await Promise.all(ops);
                this.importSummary = { total, novos, editados, invalidos };
                this.messageService.add({ severity: 'success', summary: 'Importação', detail: `Importados: ${total}, Novos: ${novos}, Editados: ${editados}, Inválidos: ${invalidos}` });
            } catch (e) {
                console.error(e);
                this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'JSON inválido ou falha na importação.' });
            } finally {
                this.importing = false;
            }
        };
        reader.readAsText(file);
    }
}

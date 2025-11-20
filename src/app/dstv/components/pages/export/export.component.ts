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

    constructor(
        private clienteService: ClienteService,
        private planoService: PlanoService,
        private servidorService: ServidorFireService,
        private messageService: MessageService
    ) { }

    exportarJson() {
        this.loading = true;
        forkJoin({
            clientes: this.clienteService.getAll().pipe(take(1)),
            planos: this.planoService.getAll().pipe(take(1)),
            servidores: this.servidorService.getAll().pipe(take(1))
        }).subscribe({
            next: (data) => {
                const json = JSON.stringify(data, null, 2);
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
}

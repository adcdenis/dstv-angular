import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { PlanoI } from 'src/app/dstv/api/dstvInterfaces';
import { PlanoService } from 'src/app/dstv/service/plano.service';
import { ClienteService } from 'src/app/dstv/service/cliente.service';

@Component({
    selector: 'app-plano',
    templateUrl: './plano.component.html',
    styleUrls: ['./plano.component.scss'],
    providers: [MessageService],
    standalone: false
})
export class PlanoComponent implements OnInit {

    public listaPlanos: Array<PlanoI> = [];
    public listaPlanosSelecionados: Array<PlanoI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoPlano: boolean = false;
    public dialogoExcluirSelecionados: boolean = false;
    public planoSelecionado: PlanoI = {};
    cols: any[] = [];
    submitted: boolean = false;

    constructor(
        private planoService: PlanoService,
        private messageService: MessageService,
        private clienteService: ClienteService
    ) {}

    ngOnInit(): void {
        console.log('aqui');

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'nome', header: 'Nome' },
            { field: 'valor', header: 'Valor' },
        ];

        this.planoService.getAll().subscribe({
            next: (v) => (this.listaPlanos = v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });

        // const primeiro: PlanoI = { id: "-NBPeQzXUecRF3LhoFKu",nome: 'Canuto2' };
        // this.excluir(primeiro);
    }

    public salvarOuAlterar() {

        this.submitted = true;

        if(!this.planoSelecionado.nome || this.planoSelecionado.nome.trim().length == 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Erro!',
                detail: 'Insira um nome!',
                life: 3000,
            });
            return;
        }

        if (this.planoSelecionado.id) {
            this.alterar();
        } else {
            this.salvar();
        }
    }

    public salvar() {

        this.planoService.create(this.planoSelecionado).then(() => {
            this.dialogoPlano = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Plano Criado!',
                life: 3000,
            });

            this.planoService.getAll().subscribe({
                next: (v) => (this.listaPlanos = v),
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            });
        });
        // .subscribe({
        //     next: (v) => (v: any) => console.log(v),
        //     error: (e) => console.error(e),
        //     complete: () => console.info('complete'),
        // });
    }

    public abrirDialogAlterar(servidor: PlanoI) {
        this.planoSelecionado = {...servidor};
        this.submitted = false;
        this.dialogoPlano = true;
    }

    public alterar() {
        this.planoService.update(this.planoSelecionado).then(() => {
            this.dialogoPlano = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Alterado!',
                life: 3000,
            });

            this.planoService.getAll().subscribe({
                next: (v) => (this.listaPlanos = v),
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            });
        });
    }

    public abrirDialogExcluir(servidor: PlanoI) {
        this.submitted = false;
        this.planoSelecionado = servidor;
        this.dialogoExcluir = true;
    }

    public async excluir() {
        // Verificar se há clientes utilizando este plano
        const clientesQuery = await this.clienteService.getByPlano(this.planoSelecionado.id || '');
        const clientes = clientesQuery.docs.map(doc => doc.data() as any);

        if (clientes.length > 0) {
            const nomesClientes = clientes.map(c => c.nome).join(', ');
            this.messageService.add({
                severity: 'error',
                summary: 'Erro ao excluir!',
                detail: `Este plano não pode ser excluído pois está sendo utilizado pelos seguintes clientes: ${nomesClientes}`,
                life: 5000,
            });
            this.dialogoExcluir = false;
            return;
        }

        this.planoService
            .delete(this.planoSelecionado.id || '')
            .then(() => {
                console.info('complete');

                this.dialogoExcluir = false;

                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso!',
                    detail: 'Plano Excluído',
                    life: 3000,
                });
                this.planoSelecionado = {};

                this.planoService.getAll().subscribe({
                    next: (v) => (this.listaPlanos = v),
                    error: (e) => console.error(e),
                    complete: () => console.info('complete'),
                });
            });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }

    public novo() {
        this.dialogoPlano = true;
        this.planoSelecionado = {};
    }

    public abrirDialogExcluirSelecionados() {
        this.dialogoExcluirSelecionados = true;
    }

    public async excluirSelecionados() {
        if(this.listaPlanosSelecionados) {
            // Verificar se há clientes utilizando os planos selecionados
            const planosComDependencias: Array<{plano: PlanoI, clientes: any[]}> = [];

            for (const plano of this.listaPlanosSelecionados) {
                const clientesQuery = await this.clienteService.getByPlano(plano.id || '');
                const clientes = clientesQuery.docs.map(doc => doc.data() as any);

                if (clientes.length > 0) {
                    planosComDependencias.push({
                        plano: plano,
                        clientes: clientes
                    });
                }
            }

            if (planosComDependencias.length > 0) {
                let mensagemErro = 'Os seguintes planos não podem ser excluídos pois estão sendo utilizados por clientes:\n';
                planosComDependencias.forEach(item => {
                    const nomesClientes = item.clientes.map(c => c.nome).join(', ');
                    mensagemErro += `\n• ${item.plano.nome}: ${nomesClientes}`;
                });

                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro ao excluir!',
                    detail: mensagemErro,
                    life: 8000,
                });
                this.dialogoExcluirSelecionados = false;
                return;
            }

            // Se não houver dependências, prosseguir com a exclusão
            this.listaPlanosSelecionados.forEach(
                (item:PlanoI) => {
                    this.planoService.delete(item.id || '');
                }
            )

            this.dialogoExcluirSelecionados = false;
            this.listaPlanosSelecionados = [];

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Planos Excluídos',
                life: 3000,
            });

            this.planoService.getAll().subscribe({
                next: (v) => (this.listaPlanos = v),
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            });
        }
    }
}

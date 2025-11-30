import { ServidorI } from './../../../api/dstvInterfaces';
import { ServidorService } from './../../../service/servidor.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';
import { ClienteService } from 'src/app/dstv/service/cliente.service';

@Component({
    selector: 'app-servidor',
    templateUrl: './servidor.component.html',
    styleUrls: ['./servidor.component.scss'],
    providers: [MessageService],
    standalone: false
})
export class ServidorComponent implements OnInit {
    public listaServidores: Array<ServidorI> = [];
    public listaServidoresSelecionados: Array<ServidorI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoServidor: boolean = false;
    public dialogoExcluirSelecionados: boolean = false;
    public servidorSelecionado: ServidorI = {};
    cols: any[] = [];
    submitted: boolean = false;

    constructor(
        private servidorService: ServidorFireService,
        private messageService: MessageService,
        private clienteService: ClienteService
    ) {}

    ngOnInit(): void {
        console.log('aqui');

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'nome', header: 'Nome' },
        ];

        this.servidorService.getAll().subscribe({
            next: (v) => (this.listaServidores = v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });

        // const primeiro: ServidorI = { id: "-NBPeQzXUecRF3LhoFKu",nome: 'Canuto2' };
        // this.excluir(primeiro);
    }

    public salvarOuAlterar() {

        this.submitted = true;

        if(!this.servidorSelecionado.nome || this.servidorSelecionado.nome.trim().length == 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Erro!',
                detail: 'Insira um nome!',
                life: 3000,
            });
            return;
        }

        if (this.servidorSelecionado.id) {
            this.alterar();
        } else {
            this.salvar();
        }
    }

    public salvar() {

        this.servidorService.create(this.servidorSelecionado).then(() => {
            this.dialogoServidor = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Servidor Criado!',
                life: 3000,
            });

            this.servidorService.getAll().subscribe({
                next: (v) => (this.listaServidores = v),
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

    public abrirDialogAlterar(servidor: ServidorI) {
        this.servidorSelecionado = {...servidor};
        this.submitted = false;
        this.dialogoServidor = true;
    }

    public alterar() {
        this.servidorService.update(this.servidorSelecionado).then(() => {
            this.dialogoServidor = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Servidor Alterado!',
                life: 3000,
            });

            this.servidorService.getAll().subscribe({
                next: (v) => (this.listaServidores = v),
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

    public abrirDialogExcluir(servidor: ServidorI) {
        this.submitted = false;
        this.servidorSelecionado = servidor;
        this.dialogoExcluir = true;
    }

    public async excluir() {
        // Verificar se há clientes utilizando este servidor
        const clientesQuery = await this.clienteService.getByServidor(this.servidorSelecionado.id || '');
        const clientes = clientesQuery.docs.map(doc => doc.data() as any);

        if (clientes.length > 0) {
            const nomesClientes = clientes.map(c => c.nome).join(', ');
            this.messageService.add({
                severity: 'error',
                summary: 'Erro ao excluir!',
                detail: `Este servidor não pode ser excluído pois está sendo utilizado pelos seguintes clientes: ${nomesClientes}`,
                life: 5000,
            });
            this.dialogoExcluir = false;
            return;
        }

        this.servidorService
            .delete(this.servidorSelecionado.id || '')
            .then(() => {
                console.info('complete');

                this.dialogoExcluir = false;

                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso!',
                    detail: 'Servidor Excluído',
                    life: 3000,
                });
                this.servidorSelecionado = {};

                this.servidorService.getAll().subscribe({
                    next: (v) => (this.listaServidores = v),
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
        this.dialogoServidor = true;
        this.servidorSelecionado = {};
    }

    public abrirDialogExcluirSelecionados() {
        this.dialogoExcluirSelecionados = true;
    }

    public async excluirSelecionados() {
        if(this.listaServidoresSelecionados) {
            // Verificar se há clientes utilizando os servidores selecionados
            const servidoresComDependencias: Array<{servidor: ServidorI, clientes: any[]}> = [];

            for (const servidor of this.listaServidoresSelecionados) {
                const clientesQuery = await this.clienteService.getByServidor(servidor.id || '');
                const clientes = clientesQuery.docs.map(doc => doc.data() as any);

                if (clientes.length > 0) {
                    servidoresComDependencias.push({
                        servidor: servidor,
                        clientes: clientes
                    });
                }
            }

            if (servidoresComDependencias.length > 0) {
                let mensagemErro = 'Os seguintes servidores não podem ser excluídos pois estão sendo utilizados por clientes:\n';
                servidoresComDependencias.forEach(item => {
                    const nomesClientes = item.clientes.map(c => c.nome).join(', ');
                    mensagemErro += `\n• ${item.servidor.nome}: ${nomesClientes}`;
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
            this.listaServidoresSelecionados.forEach(
                (item:ServidorI) => {
                    this.servidorService.delete(item.id || '');
                }
            )

            this.dialogoExcluirSelecionados = false;
            this.listaServidoresSelecionados = [];

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Servidores Excluídos',
                life: 3000,
            });

            this.servidorService.getAll().subscribe({
                next: (v) => (this.listaServidores = v),
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            });
        }
    }
}

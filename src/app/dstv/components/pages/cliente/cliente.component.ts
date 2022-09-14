import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ClienteI } from 'src/app/dstv/api/dstvInterfaces';
import { ClienteService } from 'src/app/dstv/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [MessageService],
})
export class ClienteComponent implements OnInit {

    public listaClientes: Array<ClienteI> = [];
    public listaClientesSelecionados: Array<ClienteI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoCliente: boolean = false;
    public clienteSelecionado: ClienteI = {};
    cols: any[] = [];
    submitted: boolean = false;

    constructor(
        private clienteService: ClienteService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        console.log('aqui');

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'nome', header: 'Nome' },
            { field: 'valor', header: 'Valor' },
        ];

        this.clienteService.getAll().subscribe({
            next: (v) => (this.listaClientes = v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    public salvarOuAlterar() {

        this.submitted = true;

        if(!this.clienteSelecionado.nome || this.clienteSelecionado.nome.trim().length == 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Erro!',
                detail: 'Insira um nome!',
                life: 3000,
            });
            return;
        }

        if (this.clienteSelecionado.id) {
            this.alterar();
        } else {
            this.salvar();
        }
    }

    public salvar() {

        this.clienteService.create(this.clienteSelecionado).then(() => {
            this.dialogoCliente = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Cliente Criado!',
                life: 3000,
            });

            this.clienteService.getAll().subscribe({
                next: (v) => (this.listaClientes = v),
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            });
        });
    }

    public abrirDialogAlterar(cliente: ClienteI) {
        this.clienteSelecionado = {...cliente};
        this.submitted = false;
        this.dialogoCliente = true;
    }

    public alterar() {
        this.clienteService.update(this.clienteSelecionado).then(() => {
            this.dialogoCliente = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Alterado!',
                life: 3000,
            });

            this.clienteService.getAll().subscribe({
                next: (v) => (this.listaClientes = v),
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            });
        });
    }

    public abrirDialogExcluir(cliente: ClienteI) {
        this.submitted = false;
        this.clienteSelecionado = cliente;
        this.dialogoExcluir = true;
    }

    public excluir() {
        this.clienteService
            .delete(this.clienteSelecionado.id || '')
            .then(() => {
                console.info('complete');

                this.dialogoExcluir = false;

                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso!',
                    detail: 'Excluído',
                    life: 3000,
                });
                this.clienteSelecionado = {};

                this.clienteService.getAll().subscribe({
                    next: (v) => (this.listaClientes = v),
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
        this.dialogoCliente = true;
        this.clienteSelecionado = {};
    }

    public excluirSelecionados() {

        if(this.listaClientesSelecionados) {
            this.listaClientesSelecionados.forEach(
                (item:ClienteI) => {
                    this.clienteService.delete(item.id || '');
                }
            )
        }

        console.log(this.listaClientesSelecionados);
    }

}

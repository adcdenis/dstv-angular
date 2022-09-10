import { ServidorI } from './../../../api/dstvInterfaces';
import { ServidorService } from './../../../service/servidor.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';

@Component({
    selector: 'app-servidor',
    templateUrl: './servidor.component.html',
    styleUrls: ['./servidor.component.scss'],
    providers: [MessageService],
})
export class ServidorComponent implements OnInit {
    public listaServidores: Array<ServidorI> = [];
    public listaServidoresSelecionados: Array<ServidorI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoServidor: boolean = false;
    public servidorSelecionado: ServidorI = {};
    cols: any[] = [];
    submitted: boolean = false;

    constructor(
        private servidorService: ServidorFireService,
        private messageService: MessageService
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
        this.servidorSelecionado = servidor;
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

    public excluir() {
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

    public excluirSelecionados() {

        if(this.listaServidoresSelecionados) {
            this.listaServidoresSelecionados.forEach(
                (item:ServidorI) => {
                    this.servidorService.delete(item.id || '');
                }
            )
        }


        console.log(this.listaServidoresSelecionados);
       // this.servidorService.deleteMultiple(this.listaServidoresSelecionados)

    }
}

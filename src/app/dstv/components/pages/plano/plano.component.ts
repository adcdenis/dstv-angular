import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { PlanoI } from 'src/app/dstv/api/dstvInterfaces';
import { PlanoService } from 'src/app/dstv/service/plano.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss'],
  providers: [MessageService],
})
export class PlanoComponent implements OnInit {

    public listaPlanos: Array<PlanoI> = [];
    public listaPlanosSelecionados: Array<PlanoI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoPlano: boolean = false;
    public planoSelecionado: PlanoI = {};
    cols: any[] = [];
    submitted: boolean = false;

    constructor(
        private planoService: PlanoService,
        private messageService: MessageService
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
                detail: 'Servidor Criado!',
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

    public excluir() {
        this.planoService
            .delete(this.planoSelecionado.id || '')
            .then(() => {
                console.info('complete');

                this.dialogoExcluir = false;

                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso!',
                    detail: 'Excluído',
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

    public excluirSelecionados() {

        if(this.listaPlanosSelecionados) {
            this.listaPlanosSelecionados.forEach(
                (item:PlanoI) => {
                    this.planoService.delete(item.id || '');
                }
            )
        }

        console.log(this.listaPlanosSelecionados);
    }
}

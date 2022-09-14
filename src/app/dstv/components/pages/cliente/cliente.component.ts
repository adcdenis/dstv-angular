import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    //Usando dinamic forms
    public cadastroForm: FormGroup = this.formBuilder.group({
        id: [''],
        nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(new RegExp("\\S"))]],
        usuario: ['', [Validators.maxLength(10)]],
        email: ['', [Validators.email, Validators.pattern(new RegExp("\\S")), Validators.maxLength(50)]],
        telefone: ['', [Validators.pattern(new RegExp("\\S"))]],
        observacao: ['', [Validators.pattern(new RegExp("\\S"))]],
    });

    public listaClientes: Array<ClienteI> = [];
    public listaClientesSelecionados: Array<ClienteI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoCliente: boolean = false;
    public dialogoDeleteVarios: boolean = false;

    cols: any[] = [];

    constructor(
        private clienteService: ClienteService,
        private messageService: MessageService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        console.log('aqui');

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'nome', header: 'Nome' },
            { field: 'usuario', header: 'Usuário' },
            { field: 'email', header: 'Email' },
            { field: 'telefone', header: 'Telefone' },
            { field: 'observacao', header: 'Observacao' },
        ];

        this.clienteService.getAll().subscribe({
            next: (v) => (this.listaClientes = v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    public salvarOuAlterar() {
        if (this.cadastroForm.valid) {
            console.log(this.cadastroForm.value);
            console.log(this.cadastroForm.value.nome);
        }

        // if (
        //     !this.clienteSelecionado.nome ||
        //     this.clienteSelecionado.nome.trim().length == 0
        // ) {
        //     this.messageService.add({
        //         severity: 'error',
        //         summary: 'Erro!',
        //         detail: 'Insira um nome!',
        //         life: 3000,
        //     });
        //     return;
        // }

        if (this.cadastroForm.value.id) {
            this.alterar();
        } else {
            this.salvar();
        }
    }

    public salvar() {
        this.clienteService.create(this.cadastroForm.value).then(() => {
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
        }).catch(
            (error) => console.log('error: ', error)
        );
    }

    public abrirDialogAlterar(cliente: ClienteI) {
        this.cadastroForm.patchValue(cliente);
        this.dialogoCliente = true;
    }

    public abrirDialogDeletarVarios() {
        this.dialogoDeleteVarios = true;
    }

    public alterar() {
        this.clienteService.update(this.cadastroForm.value).then(() => {
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
        this.cadastroForm.patchValue(cliente);
        this.dialogoExcluir = true;
    }

    public excluir() {
        this.clienteService
            .delete(this.cadastroForm.value.id || '')
            .then(() => {
                console.info('complete');

                this.dialogoExcluir = false;

                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso!',
                    detail: 'Excluído',
                    life: 3000,
                });

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
        this.cadastroForm.reset();
    }

    public excluirSelecionados() {
        if (this.listaClientesSelecionados) {
            this.listaClientesSelecionados.forEach((item: ClienteI) => {
                this.clienteService.delete(item.id || '');
            });
        }

        this.dialogoDeleteVarios = false;
        console.log(this.listaClientesSelecionados);
    }
}

import { PlanoService } from './../../../service/plano.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ClienteI, PlanoI, ServidorI } from 'src/app/dstv/api/dstvInterfaces';
import { ClienteService } from 'src/app/dstv/service/cliente.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';
import * as FileSaver from 'file-saver';

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
        nome: [
            '',
            [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
                Validators.pattern(new RegExp('\\S')),
            ],
        ],
        usuario: ['', [Validators.maxLength(10)]],
        email: [
            '',
            [
                Validators.email,
                Validators.pattern(new RegExp('\\S')),
                Validators.maxLength(50),
            ],
        ],
        telefone: ['', [Validators.pattern(new RegExp('\\S'))]],
        dataVencimento: ['', [Validators.required]],
        observacao: ['', [Validators.pattern(new RegExp('\\S'))]],
        servidor: [''],
        plano: [''],
    });

    public listaClientes: Array<ClienteI> = [];
    public listaPlanos: Array<PlanoI> = [];
    public listaServidores: Array<ServidorI> = [];
    public listaClientesSelecionados: Array<ClienteI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoCliente: boolean = false;
    public dialogoDeleteVarios: boolean = false;

    cols: any[] = [];

    constructor(
        private clienteService: ClienteService,
        private planoService: PlanoService,
        private servidorService: ServidorFireService,
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
            next: (v) => {
                this.listaClientes = v;
                this.listaClientes.map((item) => {
                    const dt: any = item.dataVencimento;
                    if (dt && dt.seconds) {
                        const dataConvertida = new Date(dt.seconds * 1000);
                        return (item.dataVencimento = dataConvertida);
                    } else {
                        return item;
                    }
                });
                console.log('this.listaClientes: ', this.listaClientes);
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });

        this.planoService.getAll().subscribe({
            next: (v) => (this.listaPlanos = v),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });

        this.servidorService.getAll().subscribe({
            next: (v) => (this.listaServidores = v),
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
        this.clienteService
            .create(this.cadastroForm.value)
            .then(() => {
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
            })
            .catch((error) => console.log('error: ', error));
    }

    public abrirDialogAlterar(cliente: ClienteI) {
        const dt: any = cliente.dataVencimento;
        if (dt && dt.seconds) {
            const dataConvertida = new Date(dt.seconds * 1000);
            cliente.dataVencimento = dataConvertida;
        }
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

    // exportPdf() {
    //     import("jspdf").then(jsPDF => {
    //         import("jspdf-autotable").then(x => {
    //             const doc = new jsPDF.default(0,0);
    //             doc.autoTable(this.exportColumns, this.products);
    //             doc.save('products.pdf');
    //         })
    //     })
    // }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.listaClientes);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'products');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE =
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE,
        });
        FileSaver.saveAs(
            data,
            fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}

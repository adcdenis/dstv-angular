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
    public dialogoServidor: boolean = false;
    public dialogoExcluirSelecionados: boolean = false;
    public servidorSelecionado: ServidorI = {};
    cols: any[] = [];
    submitted: boolean = false;
    public clientesPorServidor: { [key: string]: number } = {};

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
            { field: 'nrClientes', header: 'Clientes' },
        ];

        this.servidorService.getAll().subscribe({
            next: (v) => {
                this.listaServidores = v;
                this.carregarContagemClientes();
            },
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
                next: (v) => {
                    this.listaServidores = v;
                    this.carregarContagemClientes();
                },
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
                next: (v) => {
                    this.listaServidores = v;
                    this.carregarContagemClientes();
                },
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
        // Verificar se há servidores selecionados
        if (!this.listaServidoresSelecionados || this.listaServidoresSelecionados.length === 0) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Atenção!',
                detail: 'Por favor, selecione pelo menos um servidor para excluir.',
                life: 3000,
            });
            return;
        }
        this.dialogoExcluirSelecionados = true;
    }

    public async carregarContagemClientes() {
        this.clientesPorServidor = {};

        for (const servidor of this.listaServidores) {
            if (servidor.id) {
                const clientesQuery = await this.clienteService.getByServidor(servidor.id);
                const clientes = clientesQuery.docs.map(doc => doc.data() as any);
                this.clientesPorServidor[servidor.id] = clientes.length;
                // Adiciona a propriedade nrClientes ao objeto servidor para ordenação
                (servidor as any).nrClientes = clientes.length;
            }
        }

        // Força a atualização da tabela após carregar as contagens
        this.listaServidores = [...this.listaServidores];
    }

    public getNumeroClientes(servidorId?: string): number {
        if (!servidorId) return 0;
        return this.clientesPorServidor[servidorId] || 0;
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
                next: (v) => {
                    this.listaServidores = v;
                    this.carregarContagemClientes();
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            });
        }
    }
}

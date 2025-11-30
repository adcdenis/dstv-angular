import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import * as FileSaver from 'file-saver';
import { ClienteI, PlanoI, ServidorI } from 'src/app/dstv/api/dstvInterfaces';
import { ClienteService } from 'src/app/dstv/service/cliente.service';
import { PlanoService } from 'src/app/dstv/service/plano.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';

// Importar xlsx dinamicamente para evitar problemas de compilação
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-relatorios',
    templateUrl: './relatorios.component.html',
    styleUrls: ['./relatorios.component.scss'],
    providers: [MessageService],
    standalone: false
})
export class RelatoriosComponent implements OnInit {

    // Formulário de filtros
    public filtroForm: FormGroup;

    // Listas para os selects
    public listaClientes: Array<ClienteI> = [];
    public listaPlanos: Array<PlanoI> = [];
    public listaServidores: Array<ServidorI> = [];

    // Filtros ativos
    public clientesFiltrados: Array<ClienteI> = [];

    // Opções para o dropdown de status
    public statusOptions: Array<{label: string, value: string}> = [];

    // Colunas para a tabela
    public cols: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private planoService: PlanoService,
        private servidorService: ServidorFireService,
        private messageService: MessageService,
        private datePipe: DatePipe
    ) {
        // Inicializar formulário com filtros padrão
        this.filtroForm = this.formBuilder.group({
            nomeCliente: [''],
            plano: [''],
            servidor: [''],
            status: ['ativos'] // Valor padrão: ativos
        });

        // Opções para o dropdown de status
        this.statusOptions = [
            { label: 'Ativos', value: 'ativos' },
            { label: 'Vencidos', value: 'vencidos' },
            { label: 'Todos', value: 'todos' },
            { label: 'Vence em 3 dias', value: 'vence3dias' }
        ];

        // Colunas para a tabela
        this.cols = [
            { field: 'nome', header: 'Nome' },
            { field: 'usuario', header: 'Usuário' },
            { field: 'dataVencimento', header: 'Data Vencimento' },
            { field: 'plano', header: 'Plano' },
            { field: 'servidor', header: 'Servidor' },
            { field: 'status', header: 'Status' }
        ];
    }

    ngOnInit(): void {
        // Carregar dados necessários
        this.carregarDados();

        // Aplicar filtro inicial (ativos)
        this.aplicarFiltros();
    }

    private carregarDados(): void {
        // Carregar clientes
        this.clienteService.getAll().subscribe({
            next: (clientes) => {
                this.listaClientes = this.converterDatas(clientes);
                this.clientesFiltrados = [...this.listaClientes];
            },
            error: (e) => console.error('Erro ao carregar clientes:', e)
        });

        // Carregar planos
        this.planoService.getAll().subscribe({
            next: (planos) => {
                this.listaPlanos = planos;
            },
            error: (e) => console.error('Erro ao carregar planos:', e)
        });

        // Carregar servidores
        this.servidorService.getAll().subscribe({
            next: (servidores) => {
                this.listaServidores = servidores;
            },
            error: (e) => console.error('Erro ao carregar servidores:', e)
        });
    }

    private converterDatas(clientes: Array<ClienteI>): Array<ClienteI> {
        return clientes.map(cliente => {
            const dt: any = cliente.dataVencimento;
            if (dt && dt.seconds) {
                const dataConvertida = new Date(dt.seconds * 1000);
                cliente.dataVencimento = dataConvertida;
            }
            return cliente;
        });
    }

    public aplicarFiltros(): void {
        const filtros = this.filtroForm.value;

        // Começar com todos os clientes
        let filtrados = [...this.listaClientes];

        // Aplicar filtro por nome do cliente
        if (filtros.nomeCliente) {
            filtrados = filtrados.filter(cliente =>
                cliente.nome?.toLowerCase().includes(filtros.nomeCliente.toLowerCase())
            );
        }

        // Aplicar filtro por plano
        if (filtros.plano) {
            filtrados = filtrados.filter(cliente =>
                cliente.plano?.id === filtros.plano.id
            );
        }

        // Aplicar filtro por servidor
        if (filtros.servidor) {
            filtrados = filtrados.filter(cliente =>
                cliente.servidor?.id === filtros.servidor.id
            );
        }

        // Aplicar filtro por status
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        switch (filtros.status) {
            case 'ativos':
                filtrados = filtrados.filter(cliente => cliente.dataVencimento >= hoje);
                break;
            case 'vencidos':
                filtrados = filtrados.filter(cliente => cliente.dataVencimento < hoje);
                break;
            case 'vence3dias':
                const data3Dias = new Date();
                data3Dias.setHours(0, 0, 0, 0);
                data3Dias.setDate(data3Dias.getDate() + 3);
                filtrados = filtrados.filter(cliente =>
                    cliente.dataVencimento >= hoje && cliente.dataVencimento <= data3Dias
                );
                break;
            case 'todos':
                // Não aplica filtro de status
                break;
        }

        this.clientesFiltrados = filtrados;
    }

    public limparFiltros(): void {
        this.filtroForm.patchValue({
            nomeCliente: '',
            plano: '',
            servidor: '',
            status: 'ativos' // Mantém o padrão
        });
        this.aplicarFiltros();
    }

    public gerarExcel(): void {
        if (this.clientesFiltrados.length === 0) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Aviso',
                detail: 'Não há dados para exportar com os filtros selecionados.',
                life: 3000
            });
            return;
        }

        // Usar XLSX importado dinamicamente

        // Preparar dados para o Excel
        const dadosExcel = this.clientesFiltrados.map(cliente => ({
            'Nome': cliente.nome || '',
            'Usuário': cliente.usuario || '',
            'Email': cliente.email || '',
            'Telefone': cliente.telefone || '',
            'Data Vencimento': this.formatarData(cliente.dataVencimento),
            'Plano': cliente.plano?.nome || '',
            'Valor Plano': cliente.plano?.valor ? `R$ ${cliente.plano.valor.toFixed(2)}` : '',
            'Servidor': cliente.servidor?.nome || '',
            'Observação': cliente.observacao || '',
            'Status': this.getStatusCliente(cliente.dataVencimento)
        }));

        // Criar worksheet
        const worksheet = XLSX.utils.json_to_sheet(dadosExcel);

        // Definir largura das colunas
        const colWidths = [
            { wch: 30 }, // Nome
            { wch: 20 }, // Usuário
            { wch: 30 }, // Email
            { wch: 20 }, // Telefone
            { wch: 15 }, // Data Vencimento
            { wch: 20 }, // Plano
            { wch: 15 }, // Valor Plano
            { wch: 25 }, // Servidor
            { wch: 40 }, // Observação
            { wch: 15 }  // Status
        ];
        worksheet['!cols'] = colWidths;

        // Criar workbook
        const workbook = {
            Sheets: { 'Relatório de Clientes': worksheet },
            SheetNames: ['Relatório de Clientes']
        };

        // Gerar arquivo
        const excelBuffer: any = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array'
        });

        // Salvar arquivo
        const dataAtual = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');
        const fileName = `relatorio-clientes-${dataAtual}.xlsx`;

        FileSaver.saveAs(new Blob([excelBuffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }), fileName);

        // Mensagem de sucesso
        this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: `Relatório gerado com ${this.clientesFiltrados.length} registros.`,
            life: 3000
        });
    }

    public formatarData(data: Date): string {
        return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
    }

    public getStatusCliente(dataVencimento: Date): string {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        if (dataVencimento < hoje) {
            return 'Vencido';
        } else if (dataVencimento.getTime() === hoje.getTime()) {
            return 'Vence Hoje';
        } else {
            const diffDias = Math.ceil((dataVencimento.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDias <= 3) {
                return `Vence em ${diffDias} dia(s)`;
            } else {
                return 'Ativo';
            }
        }
    }

    public getCountByStatus(status: string): number {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        let filtrados = [...this.listaClientes];

        switch (status) {
            case 'ativos':
                filtrados = filtrados.filter(cliente => cliente.dataVencimento >= hoje);
                break;
            case 'vencidos':
                filtrados = filtrados.filter(cliente => cliente.dataVencimento < hoje);
                break;
            case 'vence3dias':
                const data3Dias = new Date();
                data3Dias.setHours(0, 0, 0, 0);
                data3Dias.setDate(data3Dias.getDate() + 3);
                filtrados = filtrados.filter(cliente =>
                    cliente.dataVencimento >= hoje && cliente.dataVencimento <= data3Dias
                );
                break;
            default:
                return 0;
        }

        return filtrados.length;
    }

    public getStatusClass(dataVencimento: Date): string {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        if (dataVencimento < hoje) {
            return 'status-vencido';
        } else if (dataVencimento.getTime() === hoje.getTime()) {
            return 'status-vence-hoje';
        } else {
            const diffDias = Math.ceil((dataVencimento.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDias <= 3) {
                return 'status-vence-3dias';
            } else {
                return 'status-ativo';
            }
        }
    }
}

import { map } from 'rxjs';
import { PlanoService } from './../../../service/plano.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { ClienteI, PlanoI, ServidorI } from 'src/app/dstv/api/dstvInterfaces';
import { ClienteService } from 'src/app/dstv/service/cliente.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';
import * as FileSaver from 'file-saver';
import { MensagemService } from 'src/app/dstv/service/mensagem.service';
import { MensagemTemplateI } from 'src/app/dstv/api/dstvInterfaces';
import { HistoricoRenovacaoService } from 'src/app/dstv/service/historico-renovacao.service';
import { HistoricoRenovacaoI } from 'src/app/dstv/api/dstvInterfaces';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.scss'],
    providers: [MessageService],
    standalone: false
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
        usuario: ['', [Validators.maxLength(20)]],
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
    public todosClientes: Array<ClienteI> = [];
    public listaPlanos: Array<PlanoI> = [];
    public listaServidores: Array<ServidorI> = [];
    public listaClientesSelecionados: Array<ClienteI> = [];
    public dialogoExcluir: boolean = false;
    public dialogoCliente: boolean = false;
    public dialogoDeleteVarios: boolean = false;
    public filtroVencimento: any;
    public filtroSelecionado: string = '3dias';
    public termoBusca: string = '';

    cols: any[] = [];

    constructor(
        private clienteService: ClienteService,
        private planoService: PlanoService,
        private servidorService: ServidorFireService,
        private messageService: MessageService,
        private formBuilder: FormBuilder,
        private config: PrimeNGConfig,
        private mensagemService: MensagemService,
        private historicoRenovacaoService: HistoricoRenovacaoService
    ) {}

    private converterDateToTimeStamp: any = (cliente: ClienteI) => {
        const dt: any = cliente.dataVencimento;
        if (dt && dt.seconds) {
            const dataConvertida = new Date(dt.seconds * 1000);
            cliente.dataVencimento = dataConvertida;
            return cliente;
        } else {
            return cliente;
        }
    };

    private convertEFiltra = (cliente: ClienteI[], filtro: any) => {
        this.listaClientes = cliente
            .map((item) => {
                return this.converterDateToTimeStamp(item);
            })
            .filter((item: any) => {
                return filtro ? filtro(item) : true;
            });
    };

    private vencido: (cliente: ClienteI) => boolean = (cliente: ClienteI) => {
        const date: Date = new Date();
        date.setHours(0, 0, 0, 0);
        return cliente.dataVencimento < date;
    };

    private naoVencido: (cliente: ClienteI) => boolean = (
        cliente: ClienteI
    ) => {
        const date: Date = new Date();
        date.setHours(0, 0, 0, 0);
        return cliente.dataVencimento >= date;
    };

    private venceEm3Dias: (cliente: ClienteI) => boolean = (cliente: ClienteI) => {
        const dataAtual: Date = new Date();
        dataAtual.setHours(0, 0, 0, 0);

        const data3d: Date = new Date();
        data3d.setHours(0, 0, 0, 0);
        data3d.setDate(data3d.getDate() + 3);
        return (cliente.dataVencimento >= dataAtual) && (cliente.dataVencimento <= data3d);
    };

    ngOnInit(): void {

        this.config.setTranslation({
            accept: 'Aceitar',
            reject: 'Cancelar',
            //translations
            dayNamesMin: ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
            monthNames: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        });

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'nome', header: 'Nome' },
            { field: 'usuario', header: 'Usuário' },
            { field: 'email', header: 'Email' },
            { field: 'telefone', header: 'Telefone' },
            { field: 'observacao', header: 'Observacao' },
        ];

        // Define o filtro inicial para clientes que vencem em 3 dias
        this.filtroVencimento = this.venceEm3Dias;

        // Carrega todos os clientes
        this.buscarClientes();

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

    private buscarClientesOrdenado() {
        this.clienteService.getAllOrderByVencimento().then(
            (result) => {
                console.log(result.docs)

            }

                // result.map((doc:any) => {
                //               console.log(doc.id, ' => ', doc.data());
                //               return doc.data()
                //           })
           // }

            // result.forEach((doc:any) => {
            //          console.log(doc.id, ' => ', doc.data());
            //      })
        );
    }

    public buscarClientes() {
        this.clienteService.getAll().subscribe({
            next: (v) => {
                // Armazena todos os clientes convertidos
                this.todosClientes = v.map((item) => {
                    return this.converterDateToTimeStamp(item);
                });

                // Aplica o filtro de vencimento na lista exibida
                this.aplicarFiltroAtual();
                console.log('this.listaClientes: ', this.listaClientes);
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    private aplicarFiltroAtual() {
        if (this.termoBusca && this.termoBusca.trim() !== '') {
            // Se há termo de busca, filtra por nome em todos os clientes
            this.listaClientes = this.todosClientes.filter((cliente: ClienteI) => {
                return cliente.nome && cliente.nome.toLowerCase().includes(this.termoBusca.toLowerCase());
            });
        } else {
            // Se não há termo de busca, aplica o filtro de vencimento normal
            this.listaClientes = this.todosClientes.filter((item: any) => {
                return this.filtroVencimento ? this.filtroVencimento(item) : true;
            });
        }
    }

    public buscarPorNome(termo: string) {
        this.termoBusca = termo;
        this.aplicarFiltroAtual();
    }

    public limparBusca(campoBusca: HTMLInputElement) {
        campoBusca.value = '';
        this.termoBusca = '';
        this.aplicarFiltroAtual();
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


    public filtrarPorVence3Dias() {
        this.filtroVencimento = this.venceEm3Dias;
        this.filtroSelecionado = '3dias';
        this.termoBusca = '';
        this.aplicarFiltroAtual();
    }

    public filtrarPorVencidos() {
        this.filtroVencimento = this.vencido;
        this.filtroSelecionado = 'vencidos';
        this.termoBusca = '';
        this.aplicarFiltroAtual();
    }

    public filtrarPorNaoVencidos() {
        this.filtroVencimento = this.naoVencido;
        this.filtroSelecionado = 'ativos';
        this.termoBusca = '';
        this.aplicarFiltroAtual();
    }

    public mostrarTodos() {
        this.filtroVencimento = null;
        this.filtroSelecionado = 'todos';
        this.termoBusca = '';
        this.aplicarFiltroAtual();
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

                this.buscarClientes();
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
        console.log('alterar: ', this.cadastroForm.value);
        this.clienteService.update(this.cadastroForm.value).then(() => {
            this.dialogoCliente = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Alterado!',
                life: 3000,
            });

            this.buscarClientes();
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

                this.buscarClientes();
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

    public async abrirWhatsApp(cliente: ClienteI) {

    const telefone = cliente.telefone ? String(cliente.telefone) : ''
    const nomePlano = cliente.plano ? (cliente.plano.nome || '') : ''
    const valorPlano = cliente.plano ? (cliente.plano.valor || '') : ''
    const usuario = cliente.usuario ? cliente.usuario : ''
    const dataFormatada = cliente.dataVencimento.toLocaleDateString('pt-BR');

    //teste
    //const data = new Date(2022, 10, 22, 18, 0, 0, 0);

    //const hora = data.getHours();
    //alert('hora: ' + hora)
    const hora = new Date().getHours();

    const diaTardeNoite = (hora > 6 && hora < 12) ? 'bom dia!' : (hora >= 12 && hora < 18) ? 'boa tarde!' : 'boa noite!'

    //alert('diatardenoite: ' + diaTardeNoite)

    const ativa: MensagemTemplateI | null = await this.mensagemService.getAtiva();
    let texto: string;
    if (ativa && ativa.corpo) {
        texto = ativa.corpo
            .replace(/\{\{saudacao\}\}/g, diaTardeNoite)
            .replace(/\{\{nome\}\}/g, cliente.nome || '')
            .replace(/\{\{telefone\}\}/g, telefone)
            .replace(/\{\{usuario\}\}/g, usuario)
            .replace(/\{\{dataVencimento\}\}/g, dataFormatada)
            .replace(/\{\{plano\.nome\}\}/g, nomePlano)
            .replace(/\{\{plano\.valor\}\}/g, String(valorPlano));
    } else {
        texto = `Olá, ${diaTardeNoite}\n*Segue seu vencimento IPTV* \n*Vencimento:* _${dataFormatada}_\n\n*PLANO CONTRATADO* \n⭕ _Plano:_ *${nomePlano}* \n⭕ _Valor:_ *R$ ${valorPlano}* ${usuario ? `\n⭕ _Conta:_ *${usuario}*` : ''}\n\n*FORMAS DE PAGAMENTOS* \n✅ Pic Pay : @canutobr\n✅ Banco do Brasil: ag 3020-1 cc 45746-9\n✅ Pix: canutopixbb@gmail.com \n\n- Duração da lista 30 dias, acesso de um ponto, não permite conexões simultâneas. \n\n- Assim que efetuar o pagamento, enviar o comprovante e vou efetuar a contratação/renovação o mais rápido possível.\n\n-*Aguardamos seu contato para renovação!*`;
    }

    const url = `https://web.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    }

    dialogoRenovar: boolean = false;
    dialogoPosRenovacao: boolean = false;
    clienteRenovacao: ClienteI | null = null;
    novaDataVencimento: Date | null = null;
    dataBaseRenovacao: Date | null = null;
    mensagemRenovacao: string = '';

    private calcularNovaDataVencimento(base: Date): Date {
        const nova = new Date(base);
        nova.setHours(0, 0, 0, 0);
        const diaOriginal = nova.getDate();
        nova.setMonth(nova.getMonth() + 1);
        if (nova.getDate() !== diaOriginal) {
            nova.setDate(0);
        }
        return nova;
    }

    public atualizarNovaDataVencimento() {
        if (!this.dataBaseRenovacao) {
            this.novaDataVencimento = null;
            return;
        }
        const base = new Date(this.dataBaseRenovacao);
        base.setHours(0, 0, 0, 0);
        this.dataBaseRenovacao = base;
        this.novaDataVencimento = this.calcularNovaDataVencimento(base);
    }

    public abrirDialogRenovar(cliente: ClienteI) {
        this.clienteRenovacao = { ...cliente };
        const dt: any = cliente.dataVencimento;
        let base: Date;

        // Verifica se o cliente esta vencido
        const dataVencimento: Date = dt && dt.seconds ? new Date(dt.seconds * 1000) : new Date(cliente.dataVencimento);
        const hoje: Date = new Date();
        hoje.setHours(0, 0, 0, 0);
        dataVencimento.setHours(0, 0, 0, 0);

        if (dataVencimento < hoje) {
            // Se estiver vencido, usa a data atual como base
            base = hoje;
        } else {
            // Se nao estiver vencido, usa a data de vencimento como base
            base = dataVencimento;
        }

        this.dataBaseRenovacao = new Date(base);
        this.atualizarNovaDataVencimento();
        this.dialogoRenovar = true;
    }

    public async confirmarRenovar() {
        if (!this.clienteRenovacao || !this.novaDataVencimento) return;
        const atualizado: ClienteI = { ...this.clienteRenovacao, dataVencimento: this.novaDataVencimento };
        await this.clienteService.update(atualizado);

        // Registrar no histórico de renovações
        const historico: HistoricoRenovacaoI = {
            cliente: this.clienteRenovacao,
            plano: this.clienteRenovacao.plano || { id: '', nome: '', valor: 0 },
            servidor: this.clienteRenovacao.servidor || { id: '', nome: '', valorCredito: 0 },
            dataHoraRenovacao: new Date(),
            dataNovoVencimento: this.novaDataVencimento
        };

        await this.historicoRenovacaoService.create(historico);

        this.dialogoRenovar = false;
        const dataStr = this.novaDataVencimento.toLocaleDateString('pt-BR');
        this.mensagemRenovacao = `Conta renovada com sucesso. Novo vencimento: ${dataStr}`;
        this.dialogoPosRenovacao = true;
        this.buscarClientes();
    }

    public enviarConfirmacaoRenovacao() {
        if (!this.clienteRenovacao) return;
        const telefone = this.clienteRenovacao.telefone ? String(this.clienteRenovacao.telefone) : '';
        const url = `https://web.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(this.mensagemRenovacao)}`;
        window.open(url, '_blank');
        this.dialogoPosRenovacao = false;
    }
    public clonar(cliente: ClienteI) {

        //zera id
        cliente.id = '';
        cliente.nome += ' - 2';

        this.clienteService
        .create(cliente)
        .then(() => {
            this.dialogoCliente = false;

            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Cliente Criado!',
                life: 3000,
            });

            this.buscarClientes();
        })
        .catch((error) => console.log('error: ', error));
    }
}


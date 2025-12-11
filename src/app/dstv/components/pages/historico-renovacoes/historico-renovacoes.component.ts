import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { HistoricoRenovacaoI, ClienteI, PlanoI, ServidorI } from 'src/app/dstv/api/dstvInterfaces';
import { HistoricoRenovacaoService } from 'src/app/dstv/service/historico-renovacao.service';
import { ClienteService } from 'src/app/dstv/service/cliente.service';
import { PlanoService } from 'src/app/dstv/service/plano.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-historico-renovacoes',
    templateUrl: './historico-renovacoes.component.html',
    styleUrls: ['./historico-renovacoes.component.scss'],
    providers: [MessageService, ConfirmationService],
    standalone: false
})
export class HistoricoRenovacoesComponent implements OnInit {
    public listaHistorico: Array<HistoricoRenovacaoI> = [];
    public listaClientes: Array<ClienteI> = [];
    public clientesFiltrados: Array<ClienteI> = [];
    public listaPlanos: Array<PlanoI> = [];
    public listaServidores: Array<ServidorI> = [];
    public isLoading: boolean = true;
    public dt: Table | undefined;
    
    public filtroForm: FormGroup = this.formBuilder.group({
        cliente: [''],
        plano: [''],
        servidor: [''],
        dataInicio: [''],
        dataFim: ['']
    });

    cols: any[] = [];

    constructor(
        private historicoService: HistoricoRenovacaoService,
        private clienteService: ClienteService,
        private planoService: PlanoService,
        private servidorService: ServidorFireService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.cols = [
            { field: 'dataHoraRenovacao', header: 'Data/Hora Renovação' },
            { field: 'cliente.nome', header: 'Cliente' },
            { field: 'plano.nome', header: 'Plano' },
            { field: 'servidor.nome', header: 'Servidor' },
            { field: 'dataNovoVencimento', header: 'Novo Vencimento' }
        ];

        // Define o período padrão como o mês corrente
        const hoje = new Date();
        const primeiroDia = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
        const ultimoDia = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
        
        this.filtroForm.patchValue({
            dataInicio: primeiroDia,
            dataFim: ultimoDia
        });

        this.carregarDados();
    }

    private formatDateForInput(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    private converterDateToTimeStamp = (historico: HistoricoRenovacaoI) => {
        const dtRenovacao: any = historico.dataHoraRenovacao;
        if (dtRenovacao && dtRenovacao.seconds) {
            const dataConvertida = new Date(dtRenovacao.seconds * 1000);
            historico.dataHoraRenovacao = dataConvertida;
        }
        
        const dtVencimento: any = historico.dataNovoVencimento;
        if (dtVencimento && dtVencimento.seconds) {
            const dataConvertida = new Date(dtVencimento.seconds * 1000);
            historico.dataNovoVencimento = dataConvertida;
        }
        
        return historico;
    };

    private async carregarDados() {
        this.isLoading = true;
        
        try {
            // Carregar listas para filtros
            // Usamos take(1) porque os observables do Firestore são streams contínuos e não completam sozinhos
            // Sem take(1), o toPromise() nunca resolve e o loading fica travado
            const [clientes, planos, servidores] = await Promise.all([
                this.clienteService.getAll().pipe(take(1)).toPromise(),
                this.planoService.getAll().pipe(take(1)).toPromise(),
                this.servidorService.getAll().pipe(take(1)).toPromise()
            ]);
            
            this.listaClientes = clientes || [];
            this.listaPlanos = planos || [];
            this.listaServidores = servidores || [];
            
            // Carregar histórico com filtros iniciais
            await this.aplicarFiltros();
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            this.messageService.add({
                severity: 'error',
                summary: 'Erro!',
                detail: 'Não foi possível carregar os dados.',
                life: 3000,
            });
        } finally {
            // Garantir que o loading seja desativado mesmo em caso de erro
            this.isLoading = false;
        }
    }

    public async aplicarFiltros() {
        this.isLoading = true;
        
        try {
            const formValues = this.filtroForm.value;
            // Com o autocomplete, o campo cliente pode ser o objeto ClienteI ou uma string (ID)
            const clienteSelecionado = formValues.cliente;
            const clienteId = clienteSelecionado && typeof clienteSelecionado === 'object' ? clienteSelecionado.id : clienteSelecionado;
            const planoId = formValues.plano;
            const servidorId = formValues.servidor;
            const dataInicio = formValues.dataInicio ? formValues.dataInicio : undefined;
            const dataFim = formValues.dataFim ? formValues.dataFim : undefined;
            
            // Se houver data fim, ajustar para o final do dia
            if (dataFim) {
                dataFim.setHours(23, 59, 59, 999);
            }
            
            const querySnapshot = await this.historicoService.getByFiltros(
                clienteId, 
                planoId, 
                servidorId, 
                dataInicio, 
                dataFim
            );
            
            // Se houve múltiplos filtros, o serviço já filtrou os dados
            // então precisamos extrair apenas os documentos filtrados
            const temMultiplosFiltros = (clienteId ? 1 : 0) + (planoId ? 1 : 0) + (servidorId ? 1 : 0) + (dataInicio && dataFim ? 1 : 0) > 1;
            
            if (temMultiplosFiltros) {
                // Para múltiplos filtros, precisamos refazer o filtro no componente
                // pois o serviço retorna o snapshot completo
                let docsFiltrados = querySnapshot.docs;
                
                if (clienteId) {
                    docsFiltrados = docsFiltrados.filter(doc => {
                        const data = doc.data();
                        return data['cliente'] && data['cliente'].id === clienteId;
                    });
                }
                
                if (planoId) {
                    docsFiltrados = docsFiltrados.filter(doc => {
                        const data = doc.data();
                        return data['plano'] && data['plano'].id === planoId;
                    });
                }
                
                if (servidorId) {
                    docsFiltrados = docsFiltrados.filter(doc => {
                        const data = doc.data();
                        return data['servidor'] && data['servidor'].id === servidorId;
                    });
                }
                
                if (dataInicio && dataFim) {
                    docsFiltrados = docsFiltrados.filter(doc => {
                        const data = doc.data();
                        const dataRenovacao = data['dataHoraRenovacao'];
                        if (!dataRenovacao) return false;
                        
                        // Converte Timestamp para Date se necessário
                        const dataRenovacaoDate = dataRenovacao.seconds 
                            ? new Date(dataRenovacao.seconds * 1000) 
                            : dataRenovacao;
                        
                        return dataRenovacaoDate >= dataInicio && dataRenovacaoDate <= dataFim;
                    });
                }
                
                this.listaHistorico = docsFiltrados.map((doc: any) => {
                    const historico = doc.data() as HistoricoRenovacaoI;
                    historico.id = doc.id;
                    return this.converterDateToTimeStamp(historico);
                });
            } else {
                // Para um único filtro ou nenhum, usa o resultado diretamente
                this.listaHistorico = querySnapshot.docs.map((doc: any) => {
                    const historico = doc.data() as HistoricoRenovacaoI;
                    historico.id = doc.id;
                    return this.converterDateToTimeStamp(historico);
                });
            }
            
        } catch (error) {
            console.error('Erro ao aplicar filtros:', error);
            this.messageService.add({
                severity: 'error',
                summary: 'Erro!',
                detail: 'Não foi possível aplicar os filtros.',
                life: 3000,
            });
        } finally {
            this.isLoading = false;
        }
    }

    public limparFiltros() {
        const hoje = new Date();
        const primeiroDia = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
        const ultimoDia = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
        
        this.filtroForm.patchValue({
            cliente: null,
            plano: '',
            servidor: '',
            dataInicio: primeiroDia,
            dataFim: ultimoDia
        });
        
        this.clientesFiltrados = [];
        this.aplicarFiltros();
    }

    public formatarData(data: Date): string {
        if (!data) return '';
        
        // Verificar se é um objeto Timestamp do Firebase
        const dt: any = data;
        if (dt && dt.seconds) {
            data = new Date(dt.seconds * 1000);
        }
        
        return data.toLocaleString('pt-BR');
    }

    public formatarDataSemHora(data: Date): string {
        if (!data) return '';
        
        // Verificar se é um objeto Timestamp do Firebase
        const dt: any = data;
        if (dt && dt.seconds) {
            data = new Date(dt.seconds * 1000);
        }
        
        return data.toLocaleDateString('pt-BR');
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }

    public filtrarClientes(event: any) {
        const query = event.query.toLowerCase();
        
        if (!query || query.length < 3) {
            this.clientesFiltrados = [];
            return;
        }
        
        this.clientesFiltrados = this.listaClientes.filter(cliente => 
            cliente.nome && cliente.nome.toLowerCase().includes(query)
        );
    }

    public confirmarExclusao(historico: HistoricoRenovacaoI) {
        this.confirmationService.confirm({
            message: `Tem certeza que deseja excluir o registro de renovação do cliente "${historico.cliente?.nome}"?`,
            header: 'Confirmação de Exclusão',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.excluirHistorico(historico);
            }
        });
    }

    public async excluirHistorico(historico: HistoricoRenovacaoI) {
        try {
            if (!historico.id) {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro!',
                    detail: 'ID do registro não encontrado.',
                    life: 3000,
                });
                return;
            }

            await this.historicoService.delete(historico.id);
            
            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Registro excluído com sucesso.',
                life: 3000,
            });
            
            // Recarrega os dados após a exclusão
            await this.aplicarFiltros();
        } catch (error) {
            console.error('Erro ao excluir histórico:', error);
            this.messageService.add({
                severity: 'error',
                summary: 'Erro!',
                detail: 'Não foi possível excluir o registro.',
                life: 3000,
            });
        }
    }
}
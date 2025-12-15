import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClienteI, PlanoI, ServidorI, HistoricoRenovacaoI } from 'src/app/dstv/api/dstvInterfaces';
import { ClienteService } from 'src/app/dstv/service/cliente.service';
import { PlanoService } from 'src/app/dstv/service/plano.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';
import { HistoricoRenovacaoService } from 'src/app/dstv/service/historico-renovacao.service';

@Component({
  selector: 'app-lucro-mensal',
  templateUrl: './lucro-mensal.component.html',
  styleUrls: ['./lucro-mensal.component.scss'],
  standalone: false
})
export class LucroMensalComponent implements OnInit {

  chartData: any;
  chartOptions: any;
  lucroTotalAnual: number = 0;
  isLoading: boolean = true;
  anosDisponiveis: number[] = [];
  anoSelecionado: number = new Date().getFullYear();
  
  clientes: ClienteI[] = [];
  planos: PlanoI[] = [];
  servidores: ServidorI[] = [];
  historico: HistoricoRenovacaoI[] = [];
  
  // Dados do gráfico - lucro mensal
  lucroMensal: { mes: string, valor: number }[] = [];

  constructor(
    private clienteService: ClienteService,
    private planoService: PlanoService,
    private servidorService: ServidorFireService,
    private historicoService: HistoricoRenovacaoService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.isLoading = true;
    
    // Carregar cada serviço individualmente
    this.clienteService.getAll().subscribe(
      clientes => {
        this.clientes = clientes || [];
        
        this.planoService.getAll().subscribe(
          planos => {
            this.planos = planos || [];
            
            this.servidorService.getAll().subscribe(
              servidores => {
                this.servidores = servidores || [];
                
                this.historicoService.getAll().subscribe(
                  historico => {
                    this.historico = historico || [];
                    this.processarDados();
                    this.initChartOptions();
                    this.isLoading = false;
                    this.cdr.detectChanges();
                  },
                  err => {
                    console.error('Erro ao carregar histórico:', err);
                    this.isLoading = false;
                    this.cdr.detectChanges();
                  }
                );
              },
              err => {
                console.error('Erro ao carregar servidores:', err);
                this.isLoading = false;
                this.cdr.detectChanges();
              }
            );
          },
          err => {
            console.error('Erro ao carregar planos:', err);
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        );
      },
      err => {
        console.error('Erro ao carregar clientes:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    );
  }

  processarDados() {
    // Extrair anos disponíveis do histórico
    const anosSet = new Set<number>();
    const anoCorrente = new Date().getFullYear();
    anosSet.add(anoCorrente); // Sempre inclui o ano corrente
    
    this.historico.forEach(item => {
      if (item.dataHoraRenovacao) {
        // Tratar Timestamp do Firestore
        let data: Date;
        if (typeof item.dataHoraRenovacao === 'object' && item.dataHoraRenovacao !== null && 'seconds' in item.dataHoraRenovacao) {
          // É um Timestamp do Firestore
          const timestamp = item.dataHoraRenovacao as any;
          data = new Date(timestamp.seconds * 1000);
        } else {
          // Já é uma Date ou string
          data = new Date(item.dataHoraRenovacao);
        }
        
        // Verificar se a data é válida
        if (!isNaN(data.getTime())) {
          anosSet.add(data.getFullYear());
        }
      }
    });
    
    this.anosDisponiveis = Array.from(anosSet).sort((a, b) => b - a);
    
    // Se o ano corrente não estiver na lista, adiciona no início
    if (!this.anosDisponiveis.includes(anoCorrente)) {
      this.anosDisponiveis.unshift(anoCorrente);
    }
    
    // Calcular lucro mensal para o ano selecionado
    this.calcularLucroMensal();
  }

  calcularLucroMensal() {
    // Resetar dados
    this.lucroMensal = [];
    this.lucroTotalAnual = 0;
    
    console.log('=== INÍCIO CÁLCULO LUCRO MENSAL ===');
    console.log('Ano selecionado:', this.anoSelecionado);
    // Nomes dos meses em português
    const nomesMeses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    // Inicializar lucro mensal com zero para todos os meses
    for (let i = 0; i < 12; i++) {
      this.lucroMensal.push({
        mes: nomesMeses[i],
        valor: 0
      });
    }
    
    // Criar mapas para lookup rápido
    const mapaPlanos = new Map<string, PlanoI>();
    this.planos.forEach(plano => {
      if (plano.id) mapaPlanos.set(plano.id, plano);
    });
    
    const mapaServidores = new Map<string, ServidorI>();
    this.servidores.forEach(servidor => {
      if (servidor.id) mapaServidores.set(servidor.id, servidor);
    });
    
    // Processar histórico para calcular lucro mensal
    
    this.historico.forEach((item, index) => {
      if (item.dataHoraRenovacao && item.plano?.id && item.servidor?.id) {
        // Tratar Timestamp do Firestore
        let data: Date;
        if (typeof item.dataHoraRenovacao === 'object' && item.dataHoraRenovacao !== null && 'seconds' in item.dataHoraRenovacao) {
          // É um Timestamp do Firestore
          const timestamp = item.dataHoraRenovacao as any;
          data = new Date(timestamp.seconds * 1000);
        } else {
          // Já é uma Date ou string
          data = new Date(item.dataHoraRenovacao);
        }
        
        // Verificar se a data é válida
        if (!isNaN(data.getTime())) {
          // Verificar se o registro é do ano selecionado
          if (data.getFullYear() === this.anoSelecionado) {
            const plano = mapaPlanos.get(item.plano.id);
            const servidor = mapaServidores.get(item.servidor.id);
            
            if (plano && servidor) {
              const valorPlano = plano.valor || 0;
              const valorCredito = servidor.valorCredito || 0;
              const lucro = valorPlano - valorCredito;
              

              
              const mesIndex = data.getMonth();
              this.lucroMensal[mesIndex].valor += lucro;
              this.lucroTotalAnual += lucro;
            }
          }
        }
      }
    });
    
    // Preparar dados para o gráfico
    this.chartData = {
      labels: this.lucroMensal.map(item => item.mes),
      datasets: [{
        label: 'Lucro Mensal',
        data: this.lucroMensal.map(item => item.valor),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
  }

  onAnoChange() {
    this.calcularLucroMensal();
    this.cdr.detectChanges();
  }

  initChartOptions() {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#495057',
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context: any) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
            font: {
              size: 12
            }
          },
          grid: {
            color: '#ebedef',
            display: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: '#495057',
            font: {
              size: 12
            },
            callback: function(value: any) {
              return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
            }
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }
}
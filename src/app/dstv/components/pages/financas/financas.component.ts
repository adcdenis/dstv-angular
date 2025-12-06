import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClienteI, PlanoI, ServidorI } from 'src/app/dstv/api/dstvInterfaces';
import { ClienteService } from 'src/app/dstv/service/cliente.service';
import { PlanoService } from 'src/app/dstv/service/plano.service';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.scss'],
  standalone: false
})
export class FinancasComponent implements OnInit {

  basicData: any;
  basicOptions: any;
  lucroTotal: number = 0;
  isLoading: boolean = true;
  
  clientes: ClienteI[] = [];
  planos: PlanoI[] = [];
  servidores: ServidorI[] = [];
  
  // Estatísticas por servidor
  estatisticasServidor: { servidor: ServidorI, lucro: number, clientesAtivos: number }[] = [];

  constructor(
    private clienteService: ClienteService,
    private planoService: PlanoService,
    private servidorService: ServidorFireService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.isLoading = true;
    
    // Carregar cada serviço individualmente para garantir o processamento correto
    this.clienteService.getAll().subscribe(
      clientes => {
        this.clientes = clientes || [];
        
        this.planoService.getAll().subscribe(
          planos => {
            this.planos = planos || [];
            
            this.servidorService.getAll().subscribe(
              servidores => {
                this.servidores = servidores || [];
                
                this.processarDados(this.clientes, this.planos, this.servidores);
                this.initChartOptions();
                this.isLoading = false;
                this.cdr.detectChanges();
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

  processarDados(clientes: ClienteI[], planos: PlanoI[], servidores: ServidorI[]) {
    // Mapas para acesso rápido
    const mapaPlanos = new Map<string, PlanoI>();
    planos.forEach(p => { if(p.id) mapaPlanos.set(p.id, p); });

    const mapaServidores = new Map<string, ServidorI>();
    servidores.forEach(s => { if(s.id) mapaServidores.set(s.id, s); });

    // Inicializar acumuladores por servidor
    const lucroPorServidor = new Map<string, number>();
    const clientesPorServidor = new Map<string, number>();
    
    servidores.forEach(s => {
      if(s.id) {
        lucroPorServidor.set(s.id, 0);
        clientesPorServidor.set(s.id, 0);
      }
    });

    this.lucroTotal = 0;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    let clientesAtivos = 0;
    clientes.forEach(cliente => {
      // Verificar se cliente é ativo (dataVencimento >= hoje)
      let dataVencimento = cliente.dataVencimento;
      
      // Conversão de Timestamp do Firebase se necessário
      if ((dataVencimento as any)?.seconds) {
        dataVencimento = new Date((dataVencimento as any).seconds * 1000);
      }
      
      // Garantir que é objeto Date
      if (!(dataVencimento instanceof Date)) {
        dataVencimento = new Date(dataVencimento);
      }

      dataVencimento.setHours(0, 0, 0, 0);

      if (dataVencimento >= hoje) {
        clientesAtivos++;
        // Cliente Ativo
        const planoId = cliente.plano?.id;
        const servidorId = cliente.servidor?.id;

        if (planoId && servidorId) {
          const plano = mapaPlanos.get(planoId);
          const servidor = mapaServidores.get(servidorId);

          if (plano && servidor) {
            const valorPlano = plano.valor || 0;
            const valorCredito = servidor.valorCredito || 0;
            const lucroCliente = valorPlano - valorCredito;

            // Adicionar ao total
            this.lucroTotal += lucroCliente;

            // Adicionar ao servidor específico
            const lucroAtualServidor = lucroPorServidor.get(servidorId) || 0;
            lucroPorServidor.set(servidorId, lucroAtualServidor + lucroCliente);
            
            // Incrementar contador de clientes ativos no servidor
            const clientesAtuaisServidor = clientesPorServidor.get(servidorId) || 0;
            clientesPorServidor.set(servidorId, clientesAtuaisServidor + 1);
          }
        }
      }
    });

    // Preparar dados para o gráfico
    const labels: string[] = [];
    const data: number[] = [];

    // Preparar estatísticas por servidor
    this.estatisticasServidor = [];
    
    // Iterar sobre servidores, incluindo apenas os que possuem clientes ativos
    servidores.forEach(s => {
      if (s.id && s.nome) {
        const clientesAtivosServidor = clientesPorServidor.get(s.id) || 0;
        
        // Incluir apenas servidores com clientes ativos
        if (clientesAtivosServidor > 0) {
          labels.push(s.nome);
          const lucroServidor = lucroPorServidor.get(s.id) || 0;
          data.push(lucroServidor);
          
          // Adicionar às estatísticas
          this.estatisticasServidor.push({
            servidor: s,
            lucro: lucroServidor,
            clientesAtivos: clientesAtivosServidor
          });
        }
      }
    });

    this.basicData = {
      labels: labels,
      datasets: [
        {
          label: 'Lucro por Servidor (R$)',
          data: data,
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: 1
        }
      ]
    }
  }

  initChartOptions() {
    this.basicOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#495057'
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
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057',
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

import { ClienteService } from './../../service/cliente.service';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ClienteI, ServidorI, PlanoI } from '../../api/dstvInterfaces';
import { ServidorFireService } from 'src/app/dstv/service/servidor-fire.service';
import { PlanoService } from 'src/app/dstv/service/plano.service';

@Component({
    templateUrl: './dashboard.component.html',
    standalone: false
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    clienteService : ClienteService = inject(ClienteService);

    ativos : number = 0;
    vencidos: number = 0;
    vence3dias: number = 0;

    listaServidores: Array<ServidorI> = [];
    listaPlanos: Array<PlanoI> = [];
    clientesPorServidor: Array<{servidor: ServidorI, quantidade: number}> = [];
    clientesPorPlano: Array<{plano: PlanoI, quantidade: number}> = [];

    constructor(
        private productService: ProductService,
        public layoutService: LayoutService,
        private servidorService: ServidorFireService,
        private planoService: PlanoService
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.buscarClientes();
        this.buscarServidoresEPlanos();

        // this.initChart();
        // this.productService.getProductsSmall().then(data => this.products = data);

        // this.items = [
        //     { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        //     { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        // ];
    }

    public async buscarServidoresEPlanos() {
        // Buscar servidores
        this.servidorService.getAll().subscribe({
            next: (servidores) => {
                this.listaServidores = servidores;
                this.contarClientesPorServidor();
            },
            error: (e) => console.error(e)
        });

        // Buscar planos
        this.planoService.getAll().subscribe({
            next: (planos) => {
                this.listaPlanos = planos;
                this.contarClientesPorPlano();
            },
            error: (e) => console.error(e)
        });
    }

    public async contarClientesPorServidor() {
        this.clientesPorServidor = [];

        for (const servidor of this.listaServidores) {
            if (servidor.id) {
                const clientesQuery = await this.clienteService.getByServidor(servidor.id);
                const clientes = clientesQuery.docs.map(doc => {
                    const cliente = doc.data() as ClienteI;
                    return this.converterDateToTimeStamp(cliente);
                });

                // Contar apenas clientes ativos (não vencidos)
                const quantidade = clientes.filter(cliente => this.naoVencido(cliente)).length;

                this.clientesPorServidor.push({
                    servidor: servidor,
                    quantidade: quantidade
                });
            }
        }

        // Ordenar por quantidade (maior para menor)
        this.clientesPorServidor.sort((a, b) => b.quantidade - a.quantidade);
    }

    public async contarClientesPorPlano() {
        this.clientesPorPlano = [];

        for (const plano of this.listaPlanos) {
            if (plano.id) {
                const clientesQuery = await this.clienteService.getByPlano(plano.id);
                const clientes = clientesQuery.docs.map(doc => {
                    const cliente = doc.data() as ClienteI;
                    return this.converterDateToTimeStamp(cliente);
                });

                // Contar apenas clientes ativos (não vencidos)
                const quantidade = clientes.filter(cliente => this.naoVencido(cliente)).length;

                this.clientesPorPlano.push({
                    plano: plano,
                    quantidade: quantidade
                });
            }
        }

        // Ordenar por quantidade (maior para menor)
        this.clientesPorPlano.sort((a, b) => b.quantidade - a.quantidade);
    }


    public buscarClientes() {
        this.clienteService.getAll().subscribe({
            next: (v) => {
                v.forEach(
                    (cliente) => {

                        cliente = this.converterDateToTimeStamp(cliente);

                        this.vencido(cliente) ? this.vencidos += 1 : null;
                        this.naoVencido(cliente) ? this.ativos += 1 : null;
                        this.venceEm3Dias(cliente) ? this.vence3dias += 1 : null;
                    }
                )
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

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

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

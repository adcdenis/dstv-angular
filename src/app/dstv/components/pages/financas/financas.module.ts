import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinancasRoutingModule } from './financas-routing.module';
import { FinancasComponent } from './financas.component';
import { LucroMensalComponent } from './lucro-mensal/lucro-mensal.component';

// PrimeNG Imports
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    FinancasComponent,
    LucroMensalComponent
  ],
  imports: [
    CommonModule,
    FinancasRoutingModule,
    FormsModule,
    ChartModule,
    CardModule,
    ToastModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    DropdownModule
  ]
})
export class FinancasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HistoricoRenovacoesComponent } from './historico-renovacoes.component';
import { HistoricoRenovacoesRoutingModule } from './historico-renovacoes-routing.module';

import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    HistoricoRenovacoesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HistoricoRenovacoesRoutingModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
    CalendarModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    ProgressSpinnerModule
  ],
  exports: [
    HistoricoRenovacoesComponent
  ]
})
export class HistoricoRenovacoesModule { }

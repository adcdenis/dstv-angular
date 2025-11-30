import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosComponent } from './relatorios.component';

@NgModule({
    declarations: [
        RelatoriosComponent
    ],
    imports: [
        CommonModule,
        RelatoriosRoutingModule,
        ReactiveFormsModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        TableModule,
        ToastModule,
        RippleModule
    ],
    providers: [DatePipe]
})
export class RelatoriosModule { }

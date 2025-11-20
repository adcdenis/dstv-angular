import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportRoutingModule } from './export-routing.module';
import { ExportComponent } from './export.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        ExportRoutingModule,
        ButtonModule,
        RippleModule,
        CardModule,
        ToastModule
    ],
    declarations: [ExportComponent]
})
export class ExportModule { }

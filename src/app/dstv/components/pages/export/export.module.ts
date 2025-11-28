import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportRoutingModule } from './export-routing.module';
import { ExportComponent } from './export.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';

@NgModule({
    imports: [
        CommonModule,
        ExportRoutingModule,
        ButtonModule,
        RippleModule,
        CardModule,
        ToastModule,
        FileUploadModule,
        TagModule
    ],
    declarations: [ExportComponent]
})
export class ExportModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MensagemComponent } from './mensagem.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: MensagemComponent }])],
  exports: [RouterModule]
})
export class MensagemRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancasComponent } from './financas.component';

const routes: Routes = [
  { path: '', component: FinancasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancasRoutingModule { }

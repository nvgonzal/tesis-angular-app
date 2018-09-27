import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagarPaypalComponent} from './pagar-paypal/pagar-paypal.component';

const routes: Routes = [
  {path: 'paypay/:id', component: PagarPaypalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosRoutingModule { }

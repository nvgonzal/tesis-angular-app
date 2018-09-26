import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {PagarPaypalComponent} from './pagar-paypal/pagar-paypal.component';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    PagosRoutingModule,
  ],
  declarations: [
    PagarPaypalComponent,
  ]
})
export class PagosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioHomeComponent } from './servicio-home/servicio-home.component';
import {PagosModule} from './pagos/pagos.module';

@NgModule({
  imports: [
    CommonModule,
    PagosModule,
    ServicioRoutingModule,
  ],
  declarations: [
    ServicioHomeComponent,
  ]
})
export class ServicioModule { }

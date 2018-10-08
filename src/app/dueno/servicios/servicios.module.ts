import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { HistorialServiciosComponent } from './historial-servicios/historial-servicios.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule.forChild(),
    ServiciosRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [HistorialServiciosComponent, DetalleServicioComponent]
})
export class ServiciosModule { }

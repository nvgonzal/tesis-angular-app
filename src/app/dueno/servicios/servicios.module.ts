import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { HistorialServiciosComponent } from './historial-servicios/historial-servicios.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [HistorialServiciosComponent, DetalleServicioComponent]
})
export class ServiciosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioHomeComponent } from './servicio-home/servicio-home.component';
import {PagosModule} from './pagos/pagos.module';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {MapsComponent} from './maps.component';
import { EvaluarChoferComponent } from './evaluar-chofer/evaluar-chofer.component';
import {StarRatingModule} from 'angular-star-rating';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ServicioLoaderDirective} from './servicio-loader.directive';
import { PedirServicioComponent } from './pedir-servicio/pedir-servicio.component';
import {FormsModule} from '@angular/forms';
import { ServicioPagadoComponent } from './servicio-pagado/servicio-pagado.component';
import {VehiculoModule} from '../cliente-intra/vehiculo/vehiculo.module';
import { WaitingPayComponent } from './waiting-pay/waiting-pay.component';


@NgModule({
  imports: [
    CommonModule,
    PagosModule,
    ServicioRoutingModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    StarRatingModule.forChild(),
    NgxSpinnerModule,
    FormsModule,
    VehiculoModule,
  ],
  declarations: [
    ServicioHomeComponent,
    ServicioLoaderDirective,
    MapsComponent,
    EvaluarChoferComponent,
    PedirServicioComponent,
    ServicioPagadoComponent,
    WaitingPayComponent,
  ],
  entryComponents: [
    MapsComponent,
    ServicioHomeComponent,
    EvaluarChoferComponent,
    PedirServicioComponent,
    WaitingPayComponent,
  ]
})
export class ServicioModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicioHomeComponent} from './servicio-home/servicio-home.component';
import {ServicioPagadoComponent} from './servicio-pagado/servicio-pagado.component';
import {AuthGuard} from '../guards/auth.guard';
import {WaitingPayComponent} from './waiting-pay/waiting-pay.component';

const routes: Routes = [
  {path: '', component: ServicioHomeComponent, canActivate: [AuthGuard]},
  {path: 'pagado/:id', component: ServicioPagadoComponent, canActivate: [AuthGuard]},
  {path: 'prueba', component: WaitingPayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }

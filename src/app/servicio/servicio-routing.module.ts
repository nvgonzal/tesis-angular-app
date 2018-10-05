import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicioHomeComponent} from './servicio-home/servicio-home.component';
import {ServicioPagadoComponent} from './servicio-pagado/servicio-pagado.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {path: '', component: ServicioHomeComponent, canActivate: [AuthGuard]},
  {path: 'pagado/:id', component: ServicioPagadoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicioHomeComponent} from './servicio-home/servicio-home.component';
import {ServicioPagadoComponent} from './servicio-pagado/servicio-pagado.component';

const routes: Routes = [
  {path: 'servicio', component: ServicioHomeComponent},
  {path: 'servicio/pagado/:id', component: ServicioPagadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }

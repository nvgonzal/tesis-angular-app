import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicioHomeComponent} from './servicio-home/servicio-home.component';

const routes: Routes = [
  {path: 'servicio', component: ServicioHomeComponent,
    children: [
      {path: 'pagar', loadChildren: './pagos/pagos.module#PagosModule'},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }

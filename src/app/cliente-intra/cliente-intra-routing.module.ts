import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteIntraHomeComponent} from './cliente-intra-home/cliente-intra-home.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteIntraHomeComponent,
  children: [
    {path: 'vehiculos', loadChildren: './vehiculo/vehiculo.module#VehiculoModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteIntraRoutingModule { }

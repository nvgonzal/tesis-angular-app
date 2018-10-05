import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteIntraHomeComponent} from './cliente-intra-home/cliente-intra-home.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {path: '', component: ClienteIntraHomeComponent, canActivate: [AuthGuard],
  children: [
    {path: 'vehiculos', loadChildren: './vehiculo/vehiculo.module#VehiculoModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteIntraRoutingModule { }

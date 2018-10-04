import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DuenoHomeComponent} from './dueno-home/dueno-home.component';

const routes: Routes = [
  {path: 'dueno' , component : DuenoHomeComponent,
    children: [
      {
        path: 'choferes',
        loadChildren: './piloto/piloto.module#PilotoModule'
      },
      {
        path: 'gruas',
        loadChildren: './grua/grua.module#GruaModule'
      },
      {
        path: 'servicios',
        loadChildren: './servicios/servicios.module#ServiciosModule',
      }
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenoRoutingModule { }

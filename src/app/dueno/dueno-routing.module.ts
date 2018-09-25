import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DuenoHomeComponent} from './dueno-home/dueno-home.component';

const routes: Routes = [
  {path: 'dueno' , component : DuenoHomeComponent,
    children: [
      {
        path: '',
        loadChildren: './piloto/piloto.module#PilotoModule'
      },
      {
        path: '',
        loadChildren: './grua/grua.module#GruaModule'
      }
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenoRoutingModule { }

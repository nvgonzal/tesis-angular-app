import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DuenoHomeComponent} from './dueno-home/dueno-home.component';

const routes: Routes = [
  {path: 'dueno' , component : DuenoHomeComponent,
    children: [
      {
        path: 'choferes',
        loadChildren: '../piloto/piloto.module#PilotoModule'
      },
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenoRoutingModule { }

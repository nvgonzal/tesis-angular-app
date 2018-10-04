import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistorialServiciosComponent} from './historial-servicios/historial-servicios.component';

const routes: Routes = [
  {path: 'historico', component: HistorialServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }

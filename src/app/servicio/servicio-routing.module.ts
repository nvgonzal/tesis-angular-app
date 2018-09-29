import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicioHomeComponent} from './servicio-home/servicio-home.component';
import {EvaluarChoferComponent} from './evaluar-chofer/evaluar-chofer.component';

const routes: Routes = [
  {path: 'servicio', component: ServicioHomeComponent,
    children: [
      {path: 'pagar', loadChildren: './pagos/pagos.module#PagosModule'},
      {path: 'evaluar/:id', component: EvaluarChoferComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }

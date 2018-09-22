import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';
import {PilotoListComponent} from './piloto-list/piloto-list.component';
import {PilotoCreateComponent} from './piloto-create/piloto-create.component';

const routes: Routes = [
  { path: 'list', component: PilotoListComponent},
  { path: 'create', component: PilotoCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotoRoutingModule { }

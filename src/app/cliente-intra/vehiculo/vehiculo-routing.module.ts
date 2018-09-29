import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehiculoCreateComponent} from './vehiculo-create/vehiculo-create.component';
import {VehiculoListComponent} from './vehiculo-list/vehiculo-list.component';
import {VehiculoEditComponent} from './vehiculo-edit/vehiculo-edit.component';

const routes: Routes = [
  {path: 'create', component: VehiculoCreateComponent},
  {path: 'list', component: VehiculoListComponent},
  {path: 'edit/:id', component: VehiculoEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }

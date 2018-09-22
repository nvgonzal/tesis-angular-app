import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpresaListComponent} from './empresa-list/empresa-list.component';
import {EmpresaCreateComponent} from './empresa-create/empresa-create.component';
import {EmpresaDetailComponent} from './empresa-detail/empresa-detail.component';

const routes: Routes = [
  {path: 'list', component: EmpresaListComponent},
  {path: 'create', component: EmpresaCreateComponent},
  {path: 'details/:id', component: EmpresaDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }

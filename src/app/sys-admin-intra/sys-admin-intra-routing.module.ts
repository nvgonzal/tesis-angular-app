import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SysAdminHomeComponent} from './sys-admin-home/sys-admin-home.component';

const routes: Routes = [
  {path: 'sysadmin', component: SysAdminHomeComponent,
    children: [
      {
        path: 'empresas',
        loadChildren: './empresa/empresa.module#EmpresaModule'
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysAdminIntraRoutingModule { }

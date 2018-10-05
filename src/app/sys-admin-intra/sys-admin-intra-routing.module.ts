import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SysAdminHomeComponent} from './sys-admin-home/sys-admin-home.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {path: '', component: SysAdminHomeComponent, canActivate: [AuthGuard],
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {PilotoListComponent} from './piloto/piloto-list/piloto-list.component';
import {SysadminListComponent} from './sysadmin/sysadmin-list/sysadmin-list.component';
import {DuenoListComponent} from './dueno/dueno-list/dueno-list.component';
import {DuenoCreateComponent} from './dueno/dueno-create/dueno-create.component';
import {DuenoHomeComponent} from './dueno/dueno-home/dueno-home.component';
import {DuenoEditComponent} from './dueno/dueno-edit/dueno-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'sysadmin', component: SysadminListComponent},
  {
    path: 'dueno' , component : DuenoHomeComponent,
    children :[
      { path: 'dueno-list' , component: DuenoListComponent},
      { path : 'dueno-edit' , component : DuenoEditComponent},
      { path : 'dueno-create' , component : DuenoCreateComponent}
    ]
  },
  { path: 'choferes', component: PilotoListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

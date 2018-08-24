import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {PilotoListComponent} from './piloto/piloto-list/piloto-list.component';
import {ClienteComponent} from './cliente/cliente.component';
import {EmpresaComponent} from './empresa/empresa.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'choferes', component: PilotoListComponent, canActivate: [AuthGuard]},
  { path: 'clientes', component: ClienteComponent},
  { path: 'empresas', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

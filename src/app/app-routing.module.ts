import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './guards/auth.guard';
import {DuenoGuard} from './guards/dueno.guard';
import {AdminGuard} from './guards/admin.guard';
import {ClienteGuard} from './guards/cliente.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cliente', loadChildren: './cliente-intra/cliente-intra.module#ClienteIntraModule', canActivate: [AuthGuard, ClienteGuard]},
  { path: 'dueno', loadChildren: './dueno/dueno.module#DuenoModule', canActivate: [AuthGuard, DuenoGuard]},
  { path: 'servicio', loadChildren: './servicio/servicio.module#ServicioModule', canActivate: [AuthGuard, ClienteGuard]},
  { path: 'sysadmin', loadChildren: './sys-admin-intra/sys-admin-intra.module#SysAdminIntraModule', canActivate: [AuthGuard, AdminGuard]},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

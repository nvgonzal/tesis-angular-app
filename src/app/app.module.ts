import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';
import { PilotoListComponent } from './piloto/piloto-list/piloto-list.component';
import {AuthTokenInterceptor} from './helpers/auth.interceptor';
import { ClienteComponent } from './cliente/cliente.component';
import { MainframeComponent } from './mainframe/mainframe.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClienteSidebarComponent } from './cliente/cliente-sidebar/cliente-sidebar.component';
import { ClienteContentComponent } from './cliente/cliente-content/cliente-content.component';
import { ClienteCardsComponent } from './cliente/cliente-cards/cliente-cards.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaCardComponent } from './empresa/empresa-card/empresa-card.component';
import { EmpresaContentComponent } from './empresa/empresa-content/empresa-content.component';
import { EmpresaSidebarComponent } from './empresa/empresa-sidebar/empresa-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PilotoListComponent,
    ClienteComponent,
    MainframeComponent,
    HeaderComponent,
    SidebarComponent,
    ClienteSidebarComponent,
    ClienteContentComponent,
    ClienteCardsComponent,
    EmpresaComponent,
    EmpresaCardComponent,
    EmpresaContentComponent,
    EmpresaSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {NgxSpinnerModule} from 'ngx-spinner';
import { PilotoCreateComponent } from './piloto/piloto-create/piloto-create.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { SysadminCreateComponent } from './sysadmin/sysadmin-create/sysadmin-create.component';
import { SysadminSidebarComponent } from './sysadmin/sysadmin-sidebar/sysadmin-sidebar.component';
import { SysadminListComponent } from './sysadmin/sysadmin-list/sysadmin-list.component';
import { DuenoListComponent } from './dueno/dueno-list/dueno-list.component';
import { DuenoCreateComponent } from './dueno/dueno-create/dueno-create.component';
import { DuenoEditComponent } from './dueno/dueno-edit/dueno-edit.component';
import { DuenoHomeComponent } from './dueno/dueno-home/dueno-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PilotoListComponent,
    PilotoCreateComponent
    PilotoListComponent,
    HeaderComponent,
    FooterComponent,
    SysadminCreateComponent,
    SysadminSidebarComponent,
    SysadminListComponent,
    DuenoListComponent,
    DuenoCreateComponent,
    DuenoEditComponent,
    DuenoHomeComponent
  ],
  imports: [
    NgxSpinnerModule,
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

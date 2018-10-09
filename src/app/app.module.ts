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
import {AuthTokenInterceptor} from './helpers/auth.interceptor';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CommonsResourcesModule} from './commons/commons-resources.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgmCoreModule } from '@agm/core';
import {StarRatingModule} from 'angular-star-rating';
import { PasswordUpdateComponent } from './password-update/password-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    PasswordUpdateComponent,
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonsResourcesModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxD9Rcgv2HpCsnjCNcCNUZEswZZYPm23s'
    }),
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

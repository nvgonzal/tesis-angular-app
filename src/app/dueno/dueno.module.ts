import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuenoRoutingModule } from './dueno-routing.module';
import {PilotoModule} from '../piloto/piloto.module';
import {DuenoCreateComponent} from './dueno-create/dueno-create.component';
import {DuenoEditComponent} from './dueno-edit/dueno-edit.component';
import {DuenoHomeComponent} from './dueno-home/dueno-home.component';
import {DuenoListComponent} from './dueno-list/dueno-list.component';
import {CommonsResourcesModule} from '../commons/commons-resources.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    PilotoModule,
    DuenoRoutingModule,
    CommonsResourcesModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    DuenoCreateComponent,
    DuenoEditComponent,
    DuenoHomeComponent,
    DuenoListComponent,
  ]
})
export class DuenoModule { }

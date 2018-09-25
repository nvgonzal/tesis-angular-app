import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuenoRoutingModule } from './dueno-routing.module';
import {PilotoModule} from './piloto/piloto.module';
import {DuenoHomeComponent} from './dueno-home/dueno-home.component';
import {CommonsResourcesModule} from '../commons/commons-resources.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {GruaModule} from './grua/grua.module';

@NgModule({
  imports: [
    CommonModule,
    PilotoModule,
    DuenoRoutingModule,
    CommonsResourcesModule,
    BrowserModule,
    HttpClientModule,
    GruaModule,
  ],
  declarations: [
    DuenoHomeComponent,
  ]
})
export class DuenoModule { }

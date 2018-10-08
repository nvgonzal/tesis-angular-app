import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuenoRoutingModule } from './dueno-routing.module';
import {DuenoHomeComponent} from './dueno-home/dueno-home.component';
import {CommonsResourcesModule} from '../commons/commons-resources.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DuenoRoutingModule,
    CommonsResourcesModule,
    HttpClientModule,
  ],
  declarations: [
    DuenoHomeComponent,
  ]
})
export class DuenoModule { }

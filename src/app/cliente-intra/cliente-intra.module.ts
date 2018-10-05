import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteIntraRoutingModule } from './cliente-intra-routing.module';
import { ClienteIntraHomeComponent } from './cliente-intra-home/cliente-intra-home.component';
import {CommonsResourcesModule} from '../commons/commons-resources.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    CommonsResourcesModule,
    ClienteIntraRoutingModule,
  ],
  declarations: [ClienteIntraHomeComponent]
})
export class ClienteIntraModule { }

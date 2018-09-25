import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotoRoutingModule } from './piloto-routing.module';
import {PilotoCreateComponent} from './piloto-create/piloto-create.component';
import {PilotoListComponent} from './piloto-list/piloto-list.component';
import { PilotoHomeComponent } from './piloto-home.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PilotoRoutingModule,
    NgxSpinnerModule,
    FormsModule,
  ],
  declarations: [
    PilotoHomeComponent,
    PilotoCreateComponent,
    PilotoListComponent,
  ]
})
export class PilotoModule { }

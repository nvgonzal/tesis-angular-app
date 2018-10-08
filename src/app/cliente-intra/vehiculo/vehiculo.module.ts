import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import {VehiculoCreateComponent} from './vehiculo-create/vehiculo-create.component';
import {FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule,
    VehiculoRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [
    VehiculoCreateComponent,
    VehiculoListComponent,
    VehiculoEditComponent,
  ],
  exports: [
    VehiculoCreateComponent,
  ],
})
export class VehiculoModule { }

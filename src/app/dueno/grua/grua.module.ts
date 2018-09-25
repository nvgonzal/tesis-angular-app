import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruaRoutingModule } from './grua-routing.module';
import { GruaListComponent } from './grua-list/grua-list.component';
import { GruaEditComponent } from './grua-edit/grua-edit.component';
import { GruaCreateComponent } from './grua-create/grua-create.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GruaRoutingModule,
    NgxSpinnerModule,
    FormsModule
  ],
  declarations: [
    GruaListComponent,
    GruaEditComponent,
    GruaCreateComponent
  ]
})
export class GruaModule { }

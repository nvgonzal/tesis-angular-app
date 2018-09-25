import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruaRoutingModule } from './grua-routing.module';
import { GruaListComponent } from './grua-list/grua-list.component';
import { GruaEditComponent } from './grua-edit/grua-edit.component';
import { GruaCreateComponent } from './grua-create/grua-create.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';
import { GruaHomeComponent} from './grua-home.component';

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
    GruaCreateComponent,
    GruaHomeComponent,
  ]
})
export class GruaModule { }

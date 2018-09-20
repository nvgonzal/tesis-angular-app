import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    NgxSpinnerModule,
  ],
  declarations: [EmpresaCreateComponent, EmpresaListComponent]
})
export class EmpresaModule { }

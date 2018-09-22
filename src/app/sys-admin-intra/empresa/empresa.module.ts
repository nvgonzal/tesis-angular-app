import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';
import { EmpresaDetailComponent } from './empresa-detail/empresa-detail.component';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  declarations: [EmpresaCreateComponent, EmpresaListComponent, EmpresaDetailComponent]
})
export class EmpresaModule { }

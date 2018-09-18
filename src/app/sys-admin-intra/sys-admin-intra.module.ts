import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysAdminIntraRoutingModule } from './sys-admin-intra-routing.module';
import { SysAdminHomeComponent } from './sys-admin-home/sys-admin-home.component';
import {CommonsResourcesModule} from '../commons/commons-resources.module';

@NgModule({
  imports: [
    CommonModule,
    SysAdminIntraRoutingModule,
    CommonsResourcesModule
  ],
  declarations: [SysAdminHomeComponent]
})
export class SysAdminIntraModule { }

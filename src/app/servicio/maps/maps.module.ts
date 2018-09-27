import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent} from './maps.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
  ],
  declarations: [
    MapsComponent
  ]
})
export class MapsModule { }

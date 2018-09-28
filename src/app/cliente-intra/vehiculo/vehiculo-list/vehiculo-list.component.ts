import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../../models/vehiculo';
import {Observable} from 'rxjs/index';
import {VehiculoService} from '../../../services/vehiculo.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos$: Observable<Vehiculo[]>;
  message: string;
  constructor(private vehiculoService: VehiculoService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.updateList();
  }
  deleteGrua(id: number) {
    this.spinner.show();
    this.vehiculoService.deleteVehiculo(id).subscribe(
      res => {this.message = 'Vehiculo eliminado'; this.spinner.hide(); this.updateList(); },
      res => {this.message = 'No se ha podido eliminar vehiculo'; this.spinner.hide(); }
    );
  }
  updateList() {
    this.vehiculos$ = this.vehiculoService.getVehiculos();
  }
}

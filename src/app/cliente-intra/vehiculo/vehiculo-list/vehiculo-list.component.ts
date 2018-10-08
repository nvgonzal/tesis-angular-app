import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../../models/vehiculo';
import {Observable} from 'rxjs/index';
import {VehiculoService} from '../../../services/vehiculo.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos$: Observable<Vehiculo[]>;
  message: string;
  p = 1;
  constructor(private vehiculoService: VehiculoService,
              private spinner: NgxSpinnerService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Lista de vehiculos');
    this.updateList();
  }
  deleteGrua(id: number) {
    this.spinner.show();
    this.vehiculoService.deleteVehiculo(id).subscribe(
      res => {this.message = 'Vehiculo eliminado'; this.spinner.hide(); this.updateList(); },
      res => {this.message = 'No se ha podido eliminar vehiculo. No podras eliminar un vehiculo si lo registraste en una solicitud de grua'
      ; this.spinner.hide(); }
    );
  }
  updateList() {
    this.vehiculos$ = this.vehiculoService.getVehiculos();
  }
}

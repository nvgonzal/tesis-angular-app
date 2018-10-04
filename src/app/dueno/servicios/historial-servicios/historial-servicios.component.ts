import { Component, OnInit } from '@angular/core';
import {ServicioGruaService} from '../../../services/servicio-grua.service';
import {Servicio} from '../../../models/servicio';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-historial-servicios',
  templateUrl: './historial-servicios.component.html',
  styleUrls: ['./historial-servicios.component.css']
})
export class HistorialServiciosComponent implements OnInit {
  servicios$: Observable<Servicio[]>;
  selectedServicio: Servicio;
  p: number;

  constructor(private servicioGruaService: ServicioGruaService) { }

  ngOnInit() {
    this.servicios$ = this.servicioGruaService.getServiceRecord();
  }
  verDetalle(servicio: Servicio) {
    this.selectedServicio = servicio;
  }
  retornar() {
    this.selectedServicio = null;
  }

}

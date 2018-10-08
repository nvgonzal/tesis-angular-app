import { Component, OnInit } from '@angular/core';
import {ServicioGruaService} from '../../../services/servicio-grua.service';
import {Servicio} from '../../../models/servicio';
import {Observable} from 'rxjs/index';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-historial-servicios',
  templateUrl: './historial-servicios.component.html',
  styleUrls: ['./historial-servicios.component.css']
})
export class HistorialServiciosComponent implements OnInit {
  appName: string = environment.appName;
  servicios$: Observable<Servicio[]>;
  selectedServicio: Servicio;
  p: number;

  constructor(private servicioGruaService: ServicioGruaService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Servicios finalizados - ' + this.appName);
    this.servicios$ = this.servicioGruaService.getServiceRecord();
  }
  verDetalle(servicio: Servicio) {
    this.selectedServicio = servicio;
  }
  retornar() {
    this.selectedServicio = null;
  }

}

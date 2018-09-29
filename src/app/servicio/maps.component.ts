import { Component, OnInit } from '@angular/core';
import { MapaService} from '../services/mapa.service';
import {NgxSpinnerService} from 'ngx-spinner';
import { Empresa} from '../models/empresa';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title = 'My first AGM project';
  message: string;
  errors: any;
  currentLatitude: any;
  currentLongitude: any;
  fakeLatitude = -36.827348;
  fakeLongitude = -73.050255;
  empresas: Empresa;

  constructor(private mapaService: MapaService, private spinner: NgxSpinnerService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.currentLongitude = +pos.coords.longitude;
        this.currentLatitude = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
    this.message = 'Buscando Gruas Cercanas';
  }

  buscarGrua() {
    console.log('hola');
    this.mapaService.buscarGrua('-36.827348', '-73.050255').subscribe((data: Empresa) => {
      this.empresas = data;
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  onSuccess(res: any) {
    this.message = res.message;
    console.log(res);
    setTimeout(() => {
    }, 5000);
  }
  errorHandle(res: any) {
    this.errors = res.errors;
  }
}




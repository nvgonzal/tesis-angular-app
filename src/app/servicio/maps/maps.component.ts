import { Component, OnInit } from '@angular/core';
import { MapaService} from '../../services/mapa.service';
import {NgxSpinnerService} from 'ngx-spinner';

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

  markers: marker[] = [
    {
      lat: -33.4831136,
      lng: -70.5269067,
      label: 'A',
      draggable: false
    },
    {
      lat: -33.477444,
      lng: -70.516516,
      label: 'B',
      draggable: false
    },
    {
      lat: -33.473215,
      lng: -70.533323,
      label: 'C',
      draggable: true
    }
  ];

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
    console.log('hola')
    this.mapaService.buscarGrua(this.currentLatitude, this.currentLongitude).subscribe(
      res => this.onSuccess(res),
      res => this.errorHandle(res));
  }

  onSuccess(res: any) {
    this.message = res.message;
    console.log(res)
    setTimeout(() => {
    }, 5000);
  }
  errorHandle(res: any) {
    this.errors = res.errors;
  }
}



// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

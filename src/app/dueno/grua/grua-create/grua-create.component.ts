import { Component, OnInit } from '@angular/core';
import {GruaService} from '../../../services/grua.service';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';
import {VehiculoService} from '../../../services/vehiculo.service';

@Component({
  selector: 'app-grua-create',
  templateUrl: './grua-create.component.html',
  styles: []
})
export class GruaCreateComponent implements OnInit {
  appName: string = environment.appName;
  message: string;
  errors: any;
  patente: string;
  tipo: string;
  marca: string;
  modelo: string;
  marcasVehiculos;
  constructor(private gruaService: GruaService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private title: Title,
              private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.title.setTitle('Registrar grua - ' + this.appName);
    this.message = 'Cargando...';
    this.marcasVehiculos = this.vehiculoService.marcasVehiculos;
  }

  createGrua() {
    this.spinner.show();
    this.gruaService.createGrua(this.patente, this.tipo, this.marca, this.modelo).subscribe(
      res => this.onSuccess(res),
      res => this.errorHandle(res));
  }
  onSuccess(res: any) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/dueno/gruas/list');
    }, 5000);
  }
  errorHandle(res: any) {
    this.errors = res.error.error;
    this.spinner.hide();
  }
}

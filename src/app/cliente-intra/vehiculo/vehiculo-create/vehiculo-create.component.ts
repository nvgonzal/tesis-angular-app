import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../../models/vehiculo';
import {VehiculoService} from '../../../services/vehiculo.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css']
})
export class VehiculoCreateComponent implements OnInit {
  appName: string = environment.appName;
  vehiculo: Vehiculo = new Vehiculo();
  message: string;
  errors: string;
  constructor(private vehiculoService: VehiculoService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Crear nuevo vehiculo - ' + this.appName);
  }
  createVehiculo() {
    this.spinner.show();
    this.vehiculoService.createVehiculo(this.vehiculo).subscribe(
      res => this.onSuccess(res),
      res => this.errorHandle(res));
  }
  onSuccess(res: any) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/cliente/vehiculos/list');
    }, 5000);
  }
  errorHandle(res: any) {
    this.errors = res.errors;
    this.spinner.hide();
  }

}

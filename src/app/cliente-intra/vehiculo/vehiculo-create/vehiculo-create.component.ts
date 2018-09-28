import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../../models/vehiculo';
import {VehiculoService} from '../../../services/vehiculo.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css']
})
export class VehiculoCreateComponent implements OnInit {
  vehiculo: Vehiculo = new Vehiculo();
  message: string;
  errors: string;
  constructor(private vehiculoService: VehiculoService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit() {
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

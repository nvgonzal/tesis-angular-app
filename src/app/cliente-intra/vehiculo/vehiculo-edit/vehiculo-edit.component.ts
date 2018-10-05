import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {VehiculoService} from '../../../services/vehiculo.service';
import {Vehiculo} from '../../../models/vehiculo';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css']
})
export class VehiculoEditComponent implements OnInit {
  appName: string = environment.appName;
  vehiculo: Vehiculo = new Vehiculo();
  id: number;
  message: string;
  errors: string;
  constructor(private vehiculoService: VehiculoService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Modificar vehiculo - ' + this.appName);
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.vehiculoService.getVehiculoById(this.id).subscribe(res => this.vehiculo = res);
  }
  editVehiculo() {
    this.spinner.show();
    this.vehiculoService.editVehiculo(this.vehiculo, this.id).subscribe(
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

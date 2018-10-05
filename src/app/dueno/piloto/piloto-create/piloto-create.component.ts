import { Component, OnInit } from '@angular/core';
import {PilotoService} from '../../../services/piloto.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-piloto-create',
  templateUrl: './piloto-create.component.html',
  styleUrls: ['./piloto-create.component.css']
})
export class PilotoCreateComponent implements OnInit {
  appName: string = environment.appName;
  message: string;
  errors: any;
  userEmail: string;
  userNombres: string;
  userApellidoP: string;
  userApellidoM: string;
  userRut: string;
  userCelular: string;
  userFono: string;
  constructor(private pilotoService: PilotoService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Ingresar chofer - ' + this.appName);
    this.message = 'Cargando...';
  }
  createPiloto() {
    this.spinner.show();
    this.pilotoService.createPiloto(this.userEmail, this.userNombres, this.userApellidoP
      , this.userApellidoM, this.userRut, this.userCelular, this.userFono).subscribe(
        res => this.onSuccess(res),
      res => this.errorHandle(res));
  }
  onSuccess(res: any) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/dueno/choferes/list');
    }, 5000);
  }
  errorHandle(res: any) {
    this.errors = res.errors;
    this.spinner.hide();
  }
}

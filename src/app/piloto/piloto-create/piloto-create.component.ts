import { Component, OnInit } from '@angular/core';
import {PilotoService} from '../../services/piloto.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-piloto-create',
  templateUrl: './piloto-create.component.html',
  styleUrls: ['./piloto-create.component.css']
})
export class PilotoCreateComponent implements OnInit {
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
              private router: Router) { }

  ngOnInit() {
    this.message = 'Cargando...';
  }
  createPiloto() {
    this.spinner.show();
    this.pilotoService.createPiloto(this.userEmail, this.userNombres, this.userApellidoP
      , this.userApellidoM, this.userRut, this.userCelular, this.userFono).subscribe(
        res => this.onSuccess(res));
  }
  onSuccess(res: any) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/choferes');
    }, 5000);
  }
  errorHandle(res: any) {
    this.errors = res.error;
    this.spinner.hide();
  }
}

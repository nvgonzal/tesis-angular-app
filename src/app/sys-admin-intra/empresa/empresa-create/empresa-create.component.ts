import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../../services/empresa.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';
import {User} from '../../../models/user';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {
  appName: string = environment.appName;
  message: string;
  errors: any;
  user: User = new User();
  empresaNombre: string;
  empresaRazonSocial: string;
  empresaRut: string;
  empresaDireccion: string;
  empresaCuentaPago: string;
  constructor(private empresaService: EmpresaService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Ingresar empresa - ' + this.appName);
  }

  createEmpresa() {
    this.message = 'Cargando...';
    this.spinner.show();
    this.empresaService.createEmpresa(this.user, this.empresaNombre, this.empresaRazonSocial, this.empresaRut, this.empresaDireccion,
      this.empresaCuentaPago).subscribe(
        res => this.success(res),
        res => this.handleError(res));
  }
  success(res) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/sysadmin/empresas/list');
    }, 5000);
  }
  handleError(res) {
    this.errors = res.error.error;
    this.message = 'Empresa no pudo ser ingresada al sistena';
    this.spinner.hide();
  }

}

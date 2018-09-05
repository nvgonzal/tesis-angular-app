import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  errors: any;
  userEmail: string;
  userNombres: string;
  userApellidoP: string;
  userApellidoM: string;
  userRut: string;
  userPassword: string;
  userCelular: string;
  userFono: string;
  constructor(private accountService: AccountService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.message = 'Cargando...';
    this.spinner.show();
    this.accountService.register(this.userEmail, this.userNombres, this.userApellidoP, this.userApellidoM
      , this.userRut, this.userPassword, this.userCelular, this.userFono)
      .subscribe(res => this.onSuccess(res)
        , res => { console.log(res); this.spinner.hide(); });
  }

  onSuccess(res: any) {
    this.message = res.message + '. Redirigiendo a la pagina de inicio de sesion.';
    setTimeout(() => {this.spinner.hide(); this.router.navigateByUrl('/login', { queryParams: { email: this.userEmail }}); }, 4000);
  }

}

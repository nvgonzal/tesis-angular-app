import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {
  message: string;
  errors: any;

  constructor(private accountService: AccountService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit() {
  }

  cambiarPassword(password: string, password_confirmation: string, new_password: string) {
    this.message = 'Cargando...';
    this.spinner.show();
    this.accountService.changePassword(password, password_confirmation, new_password).subscribe(
      () => this.success(),
        res => this.errorHandle(res));
  }
  success(): void {
    this.message = 'Contraseña cambiada con exito.';
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/home');
    }, 3900);
  }
  errorHandle(res): void {
    this.errors = res.error.error;
    this.spinner.hide();
  }
}

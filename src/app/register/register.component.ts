import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Title} from '@angular/platform-browser';
import {User} from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  appName: string = environment.appName;
  message: string;
  errors: any;
  userPassword: string;
  user: User = new User();
  constructor(private accountService: AccountService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Registrar cuenta - ' + this.appName);
  }
  submit() {
    this.message = 'Cargando...';
    this.spinner.show();
    this.accountService.register(this.user, this.userPassword)
      .subscribe(res => this.onSuccess(res)
        , res => { this.errors = res.error.error; this.spinner.hide(); });
  }

  onSuccess(res: any) {
    this.message = res.message + '. Redirigiendo a la pagina de inicio de sesion.';
    setTimeout(() => {this.spinner.hide(); this.router.navigateByUrl('/login', { queryParams: { email: this.user.email }}); }, 4000);
  }

}

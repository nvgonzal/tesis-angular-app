import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  returnUrl: string;
  userEmail: string;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
    this.userEmail = this.route.snapshot.queryParams['email'] || '';
  }

  login(password: string): void {
    this.spinner.show();
    this.authService.login(this.userEmail, password)
      .subscribe(res => {this.authService.setSession(res); this.router.navigate([this.returnUrl]); this.spinner.hide(); }
      , res => this.errorHandle(res));
  }

  errorHandle(res) {
    this.error = res.error.message;
    if (this.error == null) {
      this.error = 'Error desconocido';
    }
    this.spinner.hide();
  }
}

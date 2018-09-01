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
  error: String;
  returnUrl: String;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
  }

  login(email: string, password: string): void {
    this.spinner.show();
    this.authService.login(email, password)
      .subscribe(res => {this.authService.setSession(res); this.router.navigate([this.returnUrl]); }
      , res => this.errorHandle(res)
        , () => this.spinner.hide());
  }

  errorHandle(res) {
    this.error = res.error.message;
    if (this.error == null) {
      this.error = 'Error desconocido';
    }
  }
}

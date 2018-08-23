import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

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
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
  }

  login(email: string, password: string): void {
    this.authService.login(email, password)
      .subscribe(res => {this.authService.setSession(res); this.router.navigate([this.returnUrl]); }
      , res => this.error = res);
  }
}

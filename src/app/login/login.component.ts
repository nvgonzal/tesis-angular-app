import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: String;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.authService.login(email, password)
      .subscribe(res => {this.authService.setSession(res); this.router.navigate(['home']); }
      , res => this.error = res);
  }
}

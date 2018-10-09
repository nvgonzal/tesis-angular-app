import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  user: any;
  userName: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn() && this.authService.isValid()) {
      this.loggedIn = true;
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(): void {
    this.loggedIn = false;
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
  register(): void {
    this.router.navigateByUrl('/register');
  }
  login(): void {
    this.router.navigateByUrl('/login');
  }
  home(): void {
    this.router.navigateByUrl('/home');
  }
  intranet(): void {
    switch (this.user.tipo_usuario) {
      case 'cliente':
        this.router.navigateByUrl('/cliente');
        break;
      case 'dueño':
        this.router.navigateByUrl('/dueno');
        break;
      case 'admin':
        this.router.navigateByUrl('/sysadmin');
        break;
    }
  }
  pedirServicio(): void {
    this.router.navigateByUrl('/servicio');
  }
  changePassword(): void {
    this.router.navigateByUrl('/cambiarpassword');
  }
}

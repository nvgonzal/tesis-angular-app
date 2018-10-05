import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlAuth = environment.url + '/api/login';
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.urlAuth, {
      'email': email,
      'password': password,
    }, httpOptions);
  }

  setSession(authResult) {
    const expires_in = (Date.now() / 1000) + +authResult.expires_in;
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_in', '' + expires_in);
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('user');
  }

  isLoggedIn(): any {
    return localStorage.getItem('access_token') && localStorage.getItem('user');
  }

  isValid(): boolean {
    const expire_time = +localStorage.getItem('expires_in') - (Date.now() / 1000);
    if (expire_time < 5) {
      this.logout();
      return false;
    }
    return true;
  }

}

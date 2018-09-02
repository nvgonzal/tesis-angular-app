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
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_in', JSON.stringify(authResult.expires_in.valueOf()));
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
  }

  isLoggedIn() {
    return localStorage.getItem('access_token') && localStorage.getItem('user');
  }

}

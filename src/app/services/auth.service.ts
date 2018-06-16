import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlAuth = environment.url + '/oauth';
  private client_secret = 'GQhZ5FonrJhg1JsbE9z5TTooK0OSyczHSDsHyj05';
  private client_id = '2';
  private grant_type = 'password';
  private grant = '*';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.urlAuth + '/token', {
      'username': email,
      'password': password,
      'client_secret': this.client_secret,
      'client_id': this.client_id,
      'grant_type': this.grant_type,
      'grant': this.grant
    }, httpOptions);
  }

}

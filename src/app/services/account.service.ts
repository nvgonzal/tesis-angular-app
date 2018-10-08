import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/index';
import {User} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = environment.url + '/api';

  constructor(private http: HttpClient) { }

  public register(user: User, password: string): Observable<any> {
    return this.http.post(this.url + '/register', {
      'email': user.email,
      'nombre': user.nombre,
      'password': password,
      'apellido_paterno': user.apellido_paterno,
      'apellido_materno': user.apellido_materno,
      'rut': user.rut,
      'celular': user.celular,
      'telefono_fijo': user.celular
    }, httpOptions);
  }
}

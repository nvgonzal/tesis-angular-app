import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/index';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = environment.url + '/api';

  constructor(private http: HttpClient) { }

  public register(email: string, nombre: string, apellido_p: string, apellido_m: string,
           rut: string, password: string, celular: string, fono: string): Observable<any> {
    return this.http.post(this.url + '/register', {
      'email': email,
      'nombre': nombre,
      'password': password,
      'ap_paterno': apellido_p,
      'ap_materno': apellido_m,
      'rut': rut,
      'celular': celular,
      'telefono_fijo': fono
    }, httpOptions);
  }
}

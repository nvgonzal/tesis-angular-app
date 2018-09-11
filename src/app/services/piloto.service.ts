import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PilotoService {
  private url = environment.url + '/api/choferes';

  constructor(private http: HttpClient) { }
  getPilotos(): Observable<any> {
    return this.http.get(this.url);
  }
  public createPiloto(email: string, nombre: string, apellido_p: string, apellido_m: string,
                  rut: string, celular: string, fono: string): Observable<any> {
    return this.http.post(this.url, {
      'email': email,
      'nombre': nombre,
      'ap_paterno': apellido_p,
      'ap_materno': apellido_m,
      'rut': rut,
      'celular': celular,
      'telefono_fijo': fono
    }, httpOptions);
  }
}

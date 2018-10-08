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
  public createPiloto(user: User): Observable<any> {
    return this.http.post(this.url, {
      'email': user.email,
      'nombre': user.nombre,
      'apellido_paterno': user.apellido_paterno,
      'apelldio_materno': user.apellido_materno,
      'rut': user.rut,
      'celular': user.celular,
      'telefono_fijo': user.telefono_fijo
    }, httpOptions);
  }
  deletePiloto(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

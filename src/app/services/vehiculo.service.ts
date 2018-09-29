import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Vehiculo} from '../models/vehiculo';
import {Observable} from 'rxjs/index';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private url = environment.url + '/api/vehiculos';

  constructor(private http: HttpClient) { }
  getVehiculos(): Observable<any> {
    return this.http.get(this.url, httpOptions);
  }
  createVehiculo(vehiculo: Vehiculo) {
    return this.http.post(this.url, {
      'patente': vehiculo.patente_vehiculo,
      'marca': vehiculo.marca,
      'modelo': vehiculo.modelo,
      'color': vehiculo.color,
    }, httpOptions);
  }
  getVehiculoById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  editVehiculo(vehiculo: Vehiculo, id: number) {
    return this.http.put(`${this.url}/${id}`, {
      'patente': vehiculo.patente_vehiculo,
      'marca': vehiculo.marca,
      'modelo': vehiculo.modelo,
      'color': vehiculo.color,
    }, httpOptions);
  }
  deleteVehiculo(id: number) {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Servicio} from '../models/servicio';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/index';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ServicioGruaService {
  private url =  environment.url + '/api/servicio';
  constructor(private http: HttpClient) { }
  requestGrua(servicio: Servicio) {
    return this.http.post(this.url, {
      'id_empresa': servicio.id_empresa,
      'id_vehiculo': servicio.id_vehiculo,
      'ubicacion': servicio.ubicacion,
      'destino': servicio.destino,
      'descripcion': servicio.descripcion,
    }, httpOptions);
  }
  isPayable(id: number): Observable<any> {
    return this.http.get(`${this.url}/payable/${id}`, httpOptions);
  }
  getServicioById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`, httpOptions);
  }
  isFinalizable(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}/finalizable`, httpOptions);
  }
  getServiceRecord(): Observable<any> {
    return this.http.get(this.url + 's/historico', httpOptions);
  }
}

import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MapaService {
  data: any;
  private url =  environment.url + '/api/buscar';
  constructor(private http: HttpClient) { }

  public buscarGrua(latitud: string, longitud: string): Observable<any> {
  return this.http.post(this.url, {
    'latitud': latitud,
    'longitud': longitud,
  }, httpOptions);
  }
}


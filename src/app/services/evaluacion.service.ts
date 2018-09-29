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
export class EvaluacionService {
  private url = environment.url + '/api/clienteevalua';
  constructor(private http: HttpClient) { }
  getChoferInfo(id: number): Observable<any> {
    return this.http.get(`${this.url}/getinfo/${id}`, httpOptions);
  }
  registrarEvaluacion(id: number, rating: number): Observable<any>{
    return this.http.patch(`${this.url}/${id}`, {
      'evaluacion_cliente': rating,
    }, httpOptions);
  }
}

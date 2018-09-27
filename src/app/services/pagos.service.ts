import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private url = environment.url + '/api';
  constructor(private http: HttpClient) { }
  getMonto(id: number): any {
    return this.http.get(`${this.url}/monto/${id}`);
  }
  makePay(id: number): any {
    return this.http.get(`${this.url}/pagar/${id}`);
  }
}

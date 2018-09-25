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
export class GruaService {

  data: any;
  private url = environment.url + '/api/gruas';

  constructor(private http: HttpClient) { }

  getGruas(): Observable<any> {
    return this.http.get(this.url);
  }
  deleteGrua(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  public createGrua(patente: string, tipo: string, marca: string, modelo: string): Observable<any> {
    return this.http.post(this.url, {
      'patente': patente,
      'tipo': tipo,
      'marca': marca,
      'modelo': modelo
    }, httpOptions);
  }
  public editGrua(id: number, patente: string, tipo: string, marca: string, modelo: string, id_empresa: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, {
      'patente': patente,
      'tipo': tipo,
      'marca': marca,
      'modelo': modelo,
      'id_empresa': id_empresa
    }, httpOptions);
  }
  public getGruasById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}

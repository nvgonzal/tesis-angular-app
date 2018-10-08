import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/index';
import {Empresa} from '../models/empresa';
import {User} from '../models/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private url = environment.url + '/api/empresas';

  constructor(private http: HttpClient) { }
  getEmpresas(): Observable<any> {
    return this.http.get(this.url, httpOptions);
  }
  createEmpresa(user: User, nombreEmpresa: string,
                razon_social: string, rutEmpresa: string, direccion: string, cuenta_pago: string): Observable<any> {
    return this.http.post(this.url, {
      'email': user.email,
      'nombre': user.nombre,
      'apellido_paterno': user.apellido_paterno,
      'apellido_materno': user.apellido_materno,
      'rut': user.rut,
      'celular': user.celular,
      'telefono_fijo': user.telefono_fijo,
      'nombre_empresa': nombreEmpresa,
      'razon_social': razon_social,
      'rut_empresa': rutEmpresa,
      'direccion': direccion,
      'cuenta_pago': cuenta_pago,
  }, httpOptions);
  }
  getEmpresaById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`, httpOptions);
  }
  editEmpresa(id: number, empresa: Empresa): Observable<any> {
    return this.http.put(`${this.url}/${id}`, {
      'nombre_empresa': empresa.nombre,
      'razon_social': empresa.razon_social,
      'rut_empresa': empresa.rut,
      'direccion': empresa.direccion,
      'cuenta_pago': empresa.cuenta_pago,
    }, httpOptions);
  }
  deleteEmpresa(id: number) {
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }
}

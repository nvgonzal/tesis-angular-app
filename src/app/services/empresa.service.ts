import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private url = environment.url + '/api/empresas';

  constructor(private http: HttpClient) { }
  getEmpresas(): Observable<any> {
    return this.http.get(this.url);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {
  private url = environment.url + '/api';

  constructor(private http: HttpClient) { }
  getPilotos(): Observable<any> {
    return this.http.get(this.url + '/choferes');
  }
}

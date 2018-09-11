import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DueñoGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.tipo_usuario = 'dueño') {
      return true;
    }
    return false;
  }
}

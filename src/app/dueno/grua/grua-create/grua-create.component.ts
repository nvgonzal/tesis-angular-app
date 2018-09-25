import { Component, OnInit } from '@angular/core';
import {GruaService} from '../../../services/grua.service';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grua-create',
  templateUrl: './grua-create.component.html',
  styles: []
})
export class GruaCreateComponent implements OnInit {
  message: string;
  errors: any;
  patente: string;
  tipo: string;
  marca: string;
  modelo: string;
  constructor(private gruaService: GruaService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
    this.message = 'Cargando...';
  }

  createGrua() {
    this.spinner.show();
    this.gruaService.createGrua(this.patente, this.tipo, this.marca, this.modelo).subscribe(
      res => this.onSuccess(res),
      res => this.errorHandle(res));
  }
  onSuccess(res: any) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/dueno/gruas/list');
    }, 5000);
  }
  errorHandle(res: any) {
    this.errors = res.errors;
    this.spinner.hide();
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GruaService} from '../../../services/grua.service';
import {NgxSpinnerService} from 'ngx-spinner';
import { Grua} from '../../../models/grua';

@Component({
  selector: 'app-grua-edit',
  templateUrl: './grua-edit.component.html',
  styles: []
})
export class GruaEditComponent implements OnInit {
  message: string;
  errors: any;
  grua: Grua;
  data: any;
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private gruaService: GruaService,
              private spinner: NgxSpinnerService, private router: Router) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.gruaService.getGruasById(this.id).subscribe((data: Grua) => {
        this.grua = data;
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }

  }
  ngOnInit() {
  }

  saveGrua() {
    this.spinner.show();
    this.gruaService.editGrua(this.grua.id, this.grua.patente, this.grua.tipo,
      this.grua.marca, this.grua.modelo, this.grua.id_empresa).subscribe(
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

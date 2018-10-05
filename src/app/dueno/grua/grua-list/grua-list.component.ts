import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { GruaService} from '../../../services/grua.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {environment} from '../../../../environments/environment';
import {Grua} from '../../../models/grua';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-grua-list',
  templateUrl: './grua-list.component.html',
  styles: []
})
export class GruaListComponent implements OnInit {
  appName: string = environment.appName;
  gruas$: Observable<Grua[]>;
  message: string;
  constructor(private gruaService: GruaService,
              private spinner: NgxSpinnerService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Lista de gruas - ' + this.appName);
    this.updateList();
  }
  deleteGrua(id: number) {
    this.spinner.show();
    this.gruaService.deleteGrua(id).subscribe(
      res => {this.message = 'Grua Eliminada'; this.spinner.hide(); this.updateList(); },
      res => {this.message = 'No se ha podido eliminar Grua'; this.spinner.hide(); }
    );
  }
  updateList() {
    this.gruas$ = this.gruaService.getGruas();
  }
}

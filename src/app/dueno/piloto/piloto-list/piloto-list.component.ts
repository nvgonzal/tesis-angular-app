import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {PilotoService} from '../../../services/piloto.service';
import {User} from '../../../models/user';
import {NgxSpinnerService} from 'ngx-spinner';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-piloto-list',
  templateUrl: './piloto-list.component.html',
  styleUrls: ['./piloto-list.component.css']
})
export class PilotoListComponent implements OnInit {
  appName: string = environment.appName;
  pilotos$: Observable<User[]>;
  message: string;
  constructor(private pilotoService: PilotoService,
              private spinner: NgxSpinnerService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Lista de choferes | ' + this.appName);
    this.updateList();
  }
  deletePiloto(id: number) {
    this.spinner.show();
    this.pilotoService.deletePiloto(id).subscribe(
      res => {this.message = 'Piloto elimnado'; this.spinner.hide(); this.updateList(); },
       res => {this.message = 'No se ha podido eliminar piloto'; this.spinner.hide(); }
    );
  }
  updateList() {
    this.pilotos$ = this.pilotoService.getPilotos();
  }

}

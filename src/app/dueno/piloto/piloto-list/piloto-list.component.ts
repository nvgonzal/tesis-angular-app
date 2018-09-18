import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {PilotoService} from '../../../services/piloto.service';
import {User} from '../../../models/user';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-piloto-list',
  templateUrl: './piloto-list.component.html',
  styleUrls: ['./piloto-list.component.css']
})
export class PilotoListComponent implements OnInit {
  pilotos$: Observable<User[]>;
  message: string;
  constructor(private pilotoService: PilotoService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.pilotos$ = this.pilotoService.getPilotos();
  }
  deletePiloto(id: number) {
    this.spinner.show();
    this.pilotoService.deletePiloto(id).subscribe(
      res => {this.message = 'Piloto elimnado'; this.spinner.hide(); },
       res => {this.message = 'No se ha podido eliminar piloto'; this.spinner.hide(); }
    );
  }

}

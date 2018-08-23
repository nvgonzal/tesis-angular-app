import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {User} from '../../models/user';
import {PilotoService} from '../../services/piloto.service';

@Component({
  selector: 'app-piloto-list',
  templateUrl: './piloto-list.component.html',
  styleUrls: ['./piloto-list.component.css']
})
export class PilotoListComponent implements OnInit {
  pilotos$: Observable<User[]>;
  constructor(private pilotoService: PilotoService) { }

  ngOnInit() {
    this.pilotos$ = this.pilotoService.getPilotos();
  }

}

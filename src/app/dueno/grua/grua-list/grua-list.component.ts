import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { GruaService} from '../../../services/grua.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { User} from '../../../models/user';

@Component({
  selector: 'app-grua-list',
  templateUrl: './grua-list.component.html',
  styles: []
})
export class GruaListComponent implements OnInit {
  gruas$: Observable<User[]>;
  message: string;
  constructor(private gruaService: GruaService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {Empresa} from '../../../models/empresa';
import {EmpresaService} from '../../../services/empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas$: Observable<Empresa[]>;
  message: string;
  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.updateList();
  }
  updateList() {
    this.empresas$ = this.empresaService.getEmpresas();
  }

}

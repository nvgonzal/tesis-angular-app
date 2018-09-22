import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {Empresa} from '../../../models/empresa';
import {EmpresaService} from '../../../services/empresa.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas$: Observable<Empresa[]>;
  message: string;
  constructor(private empresaService: EmpresaService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.updateList();
  }
  updateList(): void {
    this.empresas$ = this.empresaService.getEmpresas();
  }
  removeEmpresa(id: number): void {
    this.spinner.show();
    this.empresaService.deleteEmpresa(id).subscribe(() => this.successRemove(), () => this.handleErrorRemove());
  }
  successRemove(): void {
    this.message = 'Empresa eliminada con exito.';
    this.updateList();
    this.spinner.hide();
  }
  handleErrorRemove(): void {
    this.message = 'Error al eliminar empresa.';
    this.spinner.hide();
  }

}

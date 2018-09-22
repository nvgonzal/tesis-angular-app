import {Component, OnInit} from '@angular/core';
import {Empresa} from '../../../models/empresa';
import {EmpresaService} from '../../../services/empresa.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {
  empresa: Empresa;
  id: number;
  errors: string;

  constructor(private empresaService: EmpresaService,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit() {
    this.getEmpresa();
  }
  getEmpresa() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.empresaService.getEmpresaById(this.id).subscribe(res => this.empresa = res);
  }
  editarEmpresa() {
    this.spinner.show();
    this.empresaService.editEmpresa(this.id, this.empresa).subscribe(
      res => this.success(res), res => this.handleError(res));
  }
  success(res) {
    this.spinner.hide();
    this.router.navigateByUrl('/sysadmin/empresas/list');
  }
  handleError(res) {
    this.errors = res.errors;
    this.spinner.hide();
  }

}

import {Component, OnInit} from '@angular/core';
import {Empresa} from '../../../models/empresa';
import {EmpresaService} from '../../../services/empresa.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {
  appName: string = environment.appName;
  empresa: Empresa = new Empresa();
  id: number;
  errors: any;

  constructor(private empresaService: EmpresaService,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Editar empresa - ' + this.appName);
    this.getEmpresa();
  }
  getEmpresa() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.empresaService.getEmpresaById(this.id).subscribe(res => this.empresa = res);
  }
  editarEmpresa(direccion: string) {
    this.empresa.direccion = direccion;
    this.spinner.show();
    this.empresaService.editEmpresa(this.id, this.empresa).subscribe(
      res => this.success(res), res => this.handleError(res));
  }
  success(res) {
    this.spinner.hide();
    this.router.navigateByUrl('/sysadmin/empresas/list');
  }
  handleError(res) {
    this.errors = res.error.error;
    this.spinner.hide();
  }

}

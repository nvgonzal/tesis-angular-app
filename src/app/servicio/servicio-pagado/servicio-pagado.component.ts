import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {ServicioGruaService} from '../../services/servicio-grua.service';
import {Servicio} from '../../models/servicio';
import {ActivatedRoute} from '@angular/router';
import {EvaluarChoferComponent} from '../evaluar-chofer/evaluar-chofer.component';
import {ServicioLoaderDirective} from '../servicio-loader.directive';
import {environment} from '../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-servicio-pagado',
  templateUrl: './servicio-pagado.component.html',
  styleUrls: ['./servicio-pagado.component.css']
})
export class ServicioPagadoComponent implements OnInit {
  appName: string = environment.appName;
  @ViewChild(ServicioLoaderDirective) loader: ServicioLoaderDirective;
  private evaluarChoferRef: ComponentRef<EvaluarChoferComponent>;
  finalizado: boolean;
  servicio: Servicio;
  id: number;
  errors: string;
  constructor(private servicioGruaService: ServicioGruaService,
              private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Esperando grua - '+ this.appName);
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.servicioGruaService.getServicioById(this.id).subscribe(res => this.servicio = res);
  }
  finalizarServicio(): void {
    this.servicioGruaService.isFinalizable(this.id).subscribe(
      res => {
        this.finalizado = res;
        this.pintarVista();
      });
  }
  pintarVista() {
    if (this.finalizado) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(EvaluarChoferComponent);
      const viewContainer = this.loader.viewContainerRef;
      viewContainer.clear();
      this.evaluarChoferRef = viewContainer.createComponent(factory);
      (<EvaluarChoferComponent>this.evaluarChoferRef.instance).servicio = this.servicio;
    } else {
      this.errors = 'El servicio aun no ha sido finalizado por el chofer.';
    }
  }
}

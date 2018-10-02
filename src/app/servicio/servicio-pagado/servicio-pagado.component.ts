import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {ServicioGruaService} from '../../services/servicio-grua.service';
import {Servicio} from '../../models/servicio';
import {ActivatedRoute} from '@angular/router';
import {EvaluarChoferComponent} from '../evaluar-chofer/evaluar-chofer.component';
import {ServicioLoaderDirective} from '../servicio-loader.directive';

@Component({
  selector: 'app-servicio-pagado',
  templateUrl: './servicio-pagado.component.html',
  styleUrls: ['./servicio-pagado.component.css']
})
export class ServicioPagadoComponent implements OnInit {
  @ViewChild(ServicioLoaderDirective) loader: ServicioLoaderDirective;
  private evaluarChoferRef: ComponentRef<EvaluarChoferComponent>;
  finalizado: boolean;
  servicio: Servicio;
  id: number;
  constructor(private servicioGruaService: ServicioGruaService,
              private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.servicioGruaService.getServicioById(this.id).subscribe(res => this.servicio = res);
  }
  finalizarServicio(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(EvaluarChoferComponent);
    const viewContainer = this.loader.viewContainerRef;
    viewContainer.clear();
    this.evaluarChoferRef = viewContainer.createComponent(factory);
    this.finalizado = true;
    (<EvaluarChoferComponent>this.evaluarChoferRef.instance).servicio = this.servicio;
  }

}

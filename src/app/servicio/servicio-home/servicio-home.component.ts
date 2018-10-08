import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {MapsComponent} from '../maps.component';
import {ServicioLoaderDirective} from '../servicio-loader.directive';
import {Empresa} from '../../models/empresa';
import {Servicio} from '../../models/servicio';
import {PedirServicioComponent} from '../pedir-servicio/pedir-servicio.component';
import {PagarPaypalComponent} from '../pagos/pagar-paypal/pagar-paypal.component';
import {ServicioGruaService} from '../../services/servicio-grua.service';
import {environment} from '../../../environments/environment';
import {Title} from '@angular/platform-browser';
import {WaitingPayComponent} from '../waiting-pay/waiting-pay.component';

@Component({
  selector: 'app-servicio-home',
  templateUrl: './servicio-home.component.html',
  styleUrls: ['./servicio-home.component.css']
})
export class ServicioHomeComponent implements OnInit {
  appName: string = environment.appName;
  @ViewChild(ServicioLoaderDirective) loader: ServicioLoaderDirective;
  private mapsComponentRef: ComponentRef<MapsComponent>;
  private pedirServicioRef: ComponentRef<PedirServicioComponent>;
  private pagarServicioRef: ComponentRef<PagarPaypalComponent>;
  private waitPriceRef: ComponentRef<WaitingPayComponent>;
  empresa: Empresa;
  servicio: Servicio;
  currentLatitude: number;
  currentLongitude: number;
  waitingPrice: boolean;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private servicioGruaService: ServicioGruaService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pedir grua - ' + this.appName);
    this.loadMap();
  }

  loadMap() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(MapsComponent);
    const viewContainer = this.loader.viewContainerRef;
    viewContainer.clear();
    this.mapsComponentRef = viewContainer.createComponent(factory);
    (<MapsComponent>this.mapsComponentRef.instance).afterSelected
      .subscribe(() => {
      this.selectedEmpresa();
    });
  }

  selectedEmpresa() {
    this.empresa = (<MapsComponent>this.mapsComponentRef.instance).selectedEmpresa;
    this.currentLatitude = (<MapsComponent>this.mapsComponentRef.instance).currentLatitude;
    this.currentLongitude = (<MapsComponent>this.mapsComponentRef.instance).currentLongitude;
    const factory = this.componentFactoryResolver.resolveComponentFactory(PedirServicioComponent);
    const viewContainer = this.loader.viewContainerRef;
    viewContainer.clear();
    this.pedirServicioRef = viewContainer.createComponent(factory);
    (<PedirServicioComponent>this.pedirServicioRef.instance).empresa = this.empresa;
    (<PedirServicioComponent>this.pedirServicioRef.instance).currentLatitude = this.currentLatitude;
    (<PedirServicioComponent>this.pedirServicioRef.instance).currentLongitude = this.currentLongitude;
    (<PedirServicioComponent>this.pedirServicioRef.instance).createCurrentPoint();
    (<PedirServicioComponent>this.pedirServicioRef.instance).afterCreateService
      .subscribe(() => this.requestDone());
  }

  requestDone() {
    this.servicio = (<PedirServicioComponent>this.pedirServicioRef.instance).createdServicio;
    const factory = this.componentFactoryResolver.resolveComponentFactory(WaitingPayComponent);
    const viewContainer = this.loader.viewContainerRef;
    viewContainer.clear();
    this.waitPriceRef = viewContainer.createComponent(factory);
    (<WaitingPayComponent>this.waitPriceRef.instance).servicio = this.servicio;
    (<WaitingPayComponent>this.waitPriceRef.instance).afterRecivePrice.subscribe(
      () => this.generatePay()
    );
  }
  generatePay() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(PagarPaypalComponent);
    const viewContainer = this.loader.viewContainerRef;
    viewContainer.clear();
    this.pagarServicioRef = viewContainer.createComponent(factory);
    (<PagarPaypalComponent>this.pagarServicioRef.instance).servicio = this.servicio;
  }

  waitPrice() {
    this.servicioGruaService.isPayable(this.servicio.id)
      .subscribe(
        () =>  this.generatePay(),
        () => this.waitPrice()
      );
  }
}

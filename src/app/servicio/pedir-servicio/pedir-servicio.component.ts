import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehiculoService} from '../../services/vehiculo.service';
import {Vehiculo} from '../../models/vehiculo';
import {Observable} from 'rxjs/index';
import {Empresa} from '../../models/empresa';
import {MouseEvent} from '@agm/core';
import {Servicio} from '../../models/servicio';
import {ServicioGruaService} from '../../services/servicio-grua.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-pedir-servicio',
  templateUrl: './pedir-servicio.component.html',
  styleUrls: ['./pedir-servicio.component.css']
})
export class PedirServicioComponent implements OnInit {
  @Input() empresa: Empresa;
  @Input() currentLatitude: number;
  @Input() currentLongitude: number;
  vehiculos$: Observable<Vehiculo[]>;
  message: string;
  errors: string;
  selectedPoint: boolean;
  fullLoad: boolean;
  selectedLatitude: number;
  selectedLongitude: number;
  servicio: Servicio = new Servicio();
  createdServicio: Servicio;
  createVehiculo: boolean;
  @Output() public afterCreateService = new EventEmitter<void>();
  constructor(private vehiculoService: VehiculoService,
              private servicioGruaService: ServicioGruaService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadVehiculos();
  }

  crearServicio() {
    this.message = 'Ingresando solicitud al sistema';
    this.spinner.show();
    if (!this.selectedLongitude) {
      this.errors = 'Debes seleccionar un destino en el mapa!';
      this.spinner.hide();
    } else {
      this.servicio.ubicacion = `${this.currentLatitude} ${this.currentLongitude}`;
      this.servicio.destino = `${this.selectedLatitude} ${this.selectedLongitude}`;
      this.servicio.id_empresa = this.empresa.id;
      this.servicioGruaService.requestGrua(this.servicio).subscribe(
        res => this.success(res),
          res => this.handleError(res));
    }
  }
  onMapClick($event: MouseEvent) {
    this.selectedPoint = true;
    this.selectedLatitude = $event.coords.lat;
    this.selectedLongitude = $event.coords.lng;
  }
  createCurrentPoint() {
    this.fullLoad = true;
  }

  success(res) {
    this.message = 'Solicitud ingresada.';
    this.createdServicio = res;
    setTimeout(() => {
      this.spinner.hide();
      this.afterCreateService.next();
    }, 5000);
  }
  handleError(res) {
    this.errors = res.errors;
    this.spinner.hide();
  }
  addVehiculo() {
    this.createVehiculo = true;
  }
  handleCreateVehiculo(): void {
    this.createVehiculo = false;
    this.loadVehiculos();
  }
  loadVehiculos(): void {
    this.vehiculos$ = this.vehiculoService.getVehiculos();
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Servicio} from '../../../models/servicio';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {
  @Input() servicio: Servicio;
  @Output() goBack = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}

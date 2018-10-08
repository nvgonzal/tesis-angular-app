import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicioGruaService} from '../../services/servicio-grua.service';
import {Servicio} from '../../models/servicio';

@Component({
  selector: 'app-waiting-pay',
  templateUrl: './waiting-pay.component.html',
  styleUrls: ['./waiting-pay.component.css']
})
export class WaitingPayComponent implements OnInit {
  @Output() public afterRecivePrice = new EventEmitter<void>();
  @Input() servicio: Servicio;

  constructor(private servicioGruaService: ServicioGruaService) { }

  ngOnInit() {
    this.waitPrice();
  }
  waitPrice() {
    this.servicioGruaService.isPayable(this.servicio.id)
      .subscribe(
        () =>  this.afterRecivePrice.next(),
        () => this.waitPrice()
      );
  }

}

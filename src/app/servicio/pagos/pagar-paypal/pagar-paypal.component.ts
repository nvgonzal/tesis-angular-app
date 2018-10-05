import {Component, Input, OnInit} from '@angular/core';
import {PagosService} from '../../../services/pagos.service';
import {InfoPago} from '../../../models/info-pago';
import {NgxSpinnerService} from 'ngx-spinner';
import {PaypalResponse} from '../../../models/paypal-response';
import {Servicio} from '../../../models/servicio';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-pagar-paypal',
  templateUrl: './pagar-paypal.component.html',
  styleUrls: ['./pagar-paypal.component.css']
})
export class PagarPaypalComponent implements OnInit {
  appName: string = environment.appName;
  success: boolean;
  informacionPago: InfoPago = new InfoPago();
  id: number;
  payPalResponse: PaypalResponse;
  @Input() servicio: Servicio;

  constructor(private pagosService: PagosService,
              private spinner: NgxSpinnerService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pagar servicio - ' + this.appName);
    this.id = this.servicio.id;
    this.pagosService.getMonto(this.id).subscribe( res => this.informacionPago = res);
  }
  makePay() {
    this.spinner.show();
    this.pagosService.makePay(this.id).subscribe( res => this.successPay(res));
  }
  successPay(res) {
    this.payPalResponse = res;
    this.success = true;
    this.spinner.hide();
  }
}

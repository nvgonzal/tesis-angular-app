import { Component, OnInit } from '@angular/core';
import {PagosService} from '../../../services/pagos.service';
import {InfoPago} from '../../../models/info-pago';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {NgxSpinnerService} from 'ngx-spinner';
import {PaypalResponse} from '../../../models/paypal-response';
import {ObservableInput} from 'rxjs/index';

@Component({
  selector: 'app-pagar-paypal',
  templateUrl: './pagar-paypal.component.html',
  styleUrls: ['./pagar-paypal.component.css']
})
export class PagarPaypalComponent implements OnInit {
  success: boolean;
  informacionPago: InfoPago;
  id: number;
  payPalResponse: PaypalResponse;

  constructor(private pagosService: PagosService,
              private activatedRoute: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
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

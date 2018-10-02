import {Component, Input, OnInit} from '@angular/core';
import {RatingChangeEvent} from 'angular-star-rating';
import {EvaluacionService} from '../../services/evaluacion.service';
import {Empresa} from '../../models/empresa';
import {User} from '../../models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {Servicio} from '../../models/servicio';

@Component({
  selector: 'app-evaluar-chofer',
  templateUrl: './evaluar-chofer.component.html',
  styleUrls: ['./evaluar-chofer.component.css']
})
export class EvaluarChoferComponent implements OnInit {
  rating: number;
  id: number;
  empresa: Empresa = new Empresa();
  user: User = new User();
  message: string;
  errors: string;
  @Input() servicio: Servicio;
  onRatingChange = ($event: RatingChangeEvent) => {
    this.rating = $event.rating;
  };
  constructor(private evaluacionService: EvaluacionService,
              private spinner: NgxSpinnerService,
              private router: Router) { }
  ngOnInit() {
    this.id = this.servicio.id;
    this.evaluacionService.getChoferInfo(this.id).subscribe( res => {
      this.empresa = res.empresa;
      this.user = res.chofer;
    });
  }
  guardarEvaluacion() {
    this.message = 'Cargando...';
    this.spinner.show();
    this.evaluacionService.registrarEvaluacion(this.id, this.rating).subscribe(
       res => this.seccessRating(res),
      () => this.handleError()
    );
  }
  seccessRating(res) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/home');
    }, 5000);
  }
  handleError() {
    this.errors = 'No se ha podido registrar la evaluacion.';
    this.spinner.hide();
  }
}

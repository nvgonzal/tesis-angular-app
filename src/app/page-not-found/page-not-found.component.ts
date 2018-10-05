import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  appName: string = environment.appName;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pagina no encontrada - ' + this.appName);
  }

}

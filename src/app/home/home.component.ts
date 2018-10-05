import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appName: string = environment.appName;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pagina principal - ' + this.appName);
  }

}

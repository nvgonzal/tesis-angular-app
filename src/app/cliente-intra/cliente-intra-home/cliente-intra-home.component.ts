import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-cliente-intra-home',
  templateUrl: './cliente-intra-home.component.html',
  styleUrls: ['./cliente-intra-home.component.css']
})
export class ClienteIntraHomeComponent implements OnInit {
  appName: string = environment.appName;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Inicio cliente - ' + this.appName);
  }

}

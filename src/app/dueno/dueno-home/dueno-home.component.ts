import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dueno-home',
  templateUrl: './dueno-home.component.html',
  styles: []
})
export class DuenoHomeComponent implements OnInit {
  appName: string = environment.appName;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Inicio dueño - ' + this.appName);
  }

}

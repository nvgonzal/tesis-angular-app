import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sys-admin-home',
  templateUrl: './sys-admin-home.component.html',
  styleUrls: ['./sys-admin-home.component.css']
})
export class SysAdminHomeComponent implements OnInit {
  appName: string = environment.appName;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Inicio panel administrador - ' + this.appName);
  }

}

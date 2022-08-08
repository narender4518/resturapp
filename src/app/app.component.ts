import { Component, OnInit } from '@angular/core';
import { Authservices } from './auth/Auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resturapp';


  constructor(private authsrv:Authservices){}
  ngOnInit() {
    this.authsrv.onAuthologin()
  }
  
}

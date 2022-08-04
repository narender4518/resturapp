import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  isLogging=true;


  onSwitchlogin(){
    this.isLogging = !this.isLogging;
  }


  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(form:NgForm){

    form.reset()
  }

}

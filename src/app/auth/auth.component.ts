import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, Authservices } from './Auth.services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  isLogging=true;
  isShowpass=true;
  isloading=false;
  error=null;

  onclickshowpasswrd(){
    this.isShowpass = !this.isShowpass;
  }

  closetheerror(){
    this.error =false;
  }

  onSwitchlogin(){
    this.isLogging = !this.isLogging;
  }


  constructor(private Authsrv:Authservices) { }

  ngOnInit(): void {
  }

  onsubmit(form:NgForm){
   if(form.invalid){
    return;
   }
  
   const email= form.value.username;
   const password= form.value.password;

   let AuthObserv: Observable<AuthResponseData>
   this.isloading=true;
   if(this.isLogging){
    AuthObserv = this.Authsrv.login(email , password)
   }
   else{

    AuthObserv = this.Authsrv.signup(email , password)

   }

    AuthObserv.subscribe(
      (data)=>{
        console.log(data)
        this.isloading=false;
      },
      (error)=>{
        console.log(error)
        this.isloading=false;
        this.error= error;
      }
     )
    form.reset()
  }

}

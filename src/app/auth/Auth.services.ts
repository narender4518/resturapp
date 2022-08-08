import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData{
idToken:string;
email:	string;
refreshToken:string;	
expiresIn:string;	
localId:string;
}


@Injectable({providedIn:'root'})
export class Authservices {
  constructor(private http:HttpClient  , private router:Router){}
  
  user = new BehaviorSubject<User>(null)
	public tokenexpirationtimer:any;

   signup(emai:string , password:string){
 return   this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0LiQGBwrE4w4QG8_ehhd8mwzDjDU3NsQ' ,{
     
        email:emai,
        password:password,
        returnSecureToken:true

    }).pipe(catchError(this.httperror) , tap(responsereq=>{
      this.handleresponsedata(responsereq.email , responsereq.localId , responsereq.idToken , +responsereq.expiresIn)
    }))


   }

 

   login(emai:string , password:string){


  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0LiQGBwrE4w4QG8_ehhd8mwzDjDU3NsQ' ,{
    
     email:emai,
    password:password,
    returnSecureToken:true

   }).pipe(catchError(this.httperror), tap(responsereq=>{
    this.handleresponsedata(responsereq.email , responsereq.localId , responsereq.idToken , +responsereq.expiresIn)
  }))

   }


   onAuthologin(){
   
    const userdata:{email:string , id:string , _tocken:string , _tokenexpirationdate:number} = JSON.parse(localStorage.getItem('userdata'));
    
    if(!userdata){
      return;
    }

    const loadeddata = new User(userdata.email , userdata.id , userdata._tocken , new Date(userdata._tokenexpirationdate))
  
     if(loadeddata.tocken){
      this.user.next(loadeddata);
       const timeleft = (new Date(userdata._tokenexpirationdate)).getTime() - (new Date().getTime());
       this.onAutologout(timeleft)
     }


   }

   onlogout(){
    this.user.next(null);
    this.router.navigate(['/Auth'])
    localStorage.removeItem('userdata')
     if(this.tokenexpirationtimer){
      clearTimeout(this.tokenexpirationtimer)
     }
     this.tokenexpirationtimer= null
   }

    onAutologout(expiration:number){
    this.tokenexpirationtimer= setTimeout(()=>{
        this.onlogout()
      } , expiration)
    }



   private handleresponsedata(email:string , id:string , token:string , expiresIn:number){
     const expeiresdate = new Date(new Date().getTime() + expiresIn*1000)
     const resuser = new User(
      email,
      id,
      token,
      expeiresdate
     )
     this.user.next(resuser)
     this.onAutologout(expiresIn * 1000)
     localStorage.setItem('userdata' , JSON.stringify(resuser))

   }

   private httperror(erroresp:HttpErrorResponse){
    let errormessage="An UnKnow Error Occured!"
    if(!erroresp.error || !erroresp.error.error){
      return throwError(errormessage)
    }
 
     switch(erroresp.error.error.message){
         case "EMAIL_EXISTS":
         errormessage='This Email Already exists'
         break;
         case 'EMAIL_NOT_FOUND':
            errormessage="This Email Doesn't exists"
          break;
        case 'INVALID_PASSWORD':
            errormessage="The password is invalid or the user does not have a password"
    
     }
     return throwError(errormessage)
   }

}
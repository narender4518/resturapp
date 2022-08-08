import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, take } from "rxjs";
import { Authservices } from "./auth/Auth.services";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor(private AuthSrv:Authservices){}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
       
       return  this.AuthSrv.user.pipe(take(1) ,exhaustMap(user=>{
         if(!user){
            return next.handle(req);
         }
          const modify = req.clone({params: new HttpParams().set('auth' , user.tocken)})    
        return next.handle(modify)
         }))

    }
}
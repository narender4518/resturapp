import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { Authservices } from "./Auth.services";


@Injectable({providedIn:'root'})
export class AuthGuard  implements CanActivate {
    constructor(private authsrv:Authservices , private router:Router){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
 /* return  this.authsrv.user.pipe(map(user=>{
      return !! user
  }), tap(iaAuth =>{
    if(!iaAuth){
    this.router.navigate(['/Auth'])
    }
   

  }) )  */


return  this.authsrv.user.pipe(take(1) , map( (user) =>{
    const isAuth = !!user;

    if(isAuth){
        return true;
    }

     else{
      return  this.router.createUrlTree(['/Auth'])
     }


} )  )


}

}
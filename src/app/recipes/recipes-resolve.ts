import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Dataservices } from "src/assets/data.services";
import { Recipes } from "src/app/recipes/recipes.module";
import { Observable } from "rxjs";
import { RecipesServices } from "./recipes.serviecs";



@Injectable({providedIn:'root'})
export  class recipesResolve  implements  Resolve<Recipes[]>    {
   constructor(private datasrv:Dataservices   , private recipesrv:RecipesServices){}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipes[] | Observable<Recipes[]> | Promise<Recipes[]> {
    const recipe = this.recipesrv.getrecipe();
    
    if(this.recipesrv.recipe.length === 0){
        return this.datasrv.onFetchdata()

    }else{
        return recipe;
    }
   
}


}
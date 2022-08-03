import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipes } from "src/app/recipes/recipes.module";
import { RecipesServices } from "src/app/recipes/recipes.serviecs";


@Injectable({providedIn:'root'})

export class Dataservices {
   constructor(private http:HttpClient  , private recipesrv:RecipesServices){}


     sendingdatatoserver(){
        const recipe= this.recipesrv.getrecipe();

        this.http.put('https://recipeproject-6d619-default-rtdb.firebaseio.com/recipe.json' , recipe).subscribe(
        (resposivedata)=>{
            console.log(resposivedata)
        }
     )
     }
  
      onFetchdata(){
      return   this.http.get<Recipes[]>('https://recipeproject-6d619-default-rtdb.firebaseio.com/recipe.json')
         .pipe(map(
            recipes =>{
             return recipes.map(maprecipes=>{
                return {...maprecipes, 
                    ingredient: maprecipes.ingredient? maprecipes.ingredient : []}
             })   
            }
         ), tap(
            (serverdata)=>{
                this.recipesrv.backenddata(serverdata)
            }
         ))
      }

      


}
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shopping/shop.module";
import { ShopServices } from "../shopping/shop.servies";
import { Recipes } from "./recipes.module";


@Injectable({providedIn:'root'})
export class RecipesServices{


constructor(private shopsrv:ShopServices){}
  recipechanged = new Subject<Recipes[]>();
 recipeselected = new EventEmitter<Recipes[]>() 
  recipe:Recipes[]   =[
    new Recipes('Biriyani' , 
        'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent' , 
        'http://en.wikipedia.org/wiki/Special:FilePath/Biryani_of_Lahore.jpg' ,
         [  new Ingredient('Mutton' ,900) ,
         new Ingredient('Paneer' ,100)                      ]
            ),
      new Recipes('Pizza' ,  'testy' ,'https://1fbbr13qhcm41ppjbr450rsxt72-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/meatMadness-2.jpg' ,
        [new Ingredient('chicken' ,200)]        )
  ]
  

   getrecipe(){
    return this.recipe.slice()
   }

   getrecipewithid(id:number){
    return this.recipe.slice()[id]
   }

   transferdatarecipetoshop(ingredient:Ingredient[]){
    this.shopsrv.gettingdatarecipetoshop(ingredient)
   }


   onupdatedata(id:number , uptrecipes:Recipes){
    this.recipe[id]= uptrecipes;
    this.recipechanged.next(this.recipe.slice())
    
   }

   newdatasomefromeditcomp(newrecipe:Recipes){
     this.recipe.push(newrecipe)
     this.recipechanged.next(this.recipe.slice())

   }




}
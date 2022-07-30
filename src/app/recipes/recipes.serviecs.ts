import { EventEmitter, Injectable } from "@angular/core";
import { Recipes } from "./recipes.module";


@Injectable({providedIn:'root'})
export class RecipesServices{

 recipeselected = new EventEmitter<Recipes>() 
  recipe:Recipes[]   =[
    new Recipes('Biriyani' , 
        'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent' , 
        'http://en.wikipedia.org/wiki/Special:FilePath/Biryani_of_Lahore.jpg'
            ),
      new Recipes('Pizza' ,  'testy' ,'https://1fbbr13qhcm41ppjbr450rsxt72-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/meatMadness-2.jpg' ,
                )
  ]
    

   getrecipe(){
    return this.recipe.slice()
   }

   getrecipewithid(id:number){
    return this.recipe.slice()[id];
   }


}
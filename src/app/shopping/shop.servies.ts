import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "./shop.module";



@Injectable({providedIn:'root'})
export class ShopServices{
    ingredient:Ingredient[]=[
        new Ingredient('Tomato' ,45),
        new Ingredient('onion' ,18)

    ]
    Shopupdatenew=new EventEmitter<Ingredient[]>()
    idsubject = new Subject<number>();
    getIngredient(){
        return this.ingredient.slice();
    }

    datagetting(Ingredi){
      this.ingredient.push(Ingredi)
      this.Shopupdatenew.emit(this.ingredient.slice())
    }


    iddatagetting(id:number){
     return this.ingredient.slice()[id] ;
    }


    onUpdatedata(id:number, ingredient:Ingredient){
        this.ingredient[id]=ingredient ;
        this.Shopupdatenew.emit(this.ingredient.slice())
    }


   ondelete(id:number){
    this.ingredient.splice(id , 1);
    this.Shopupdatenew.emit(this.ingredient.slice())

   }


   
   gettingdatarecipetoshop(ingredient:Ingredient[]){
    this.ingredient.push(...ingredient)
    this.Shopupdatenew.emit(this.ingredient.slice())

  }


}
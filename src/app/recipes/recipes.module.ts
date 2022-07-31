import { Ingredient } from "../shopping/shop.module";

export class Recipes{ 
 public name:String;
 public description:string;
 public  imagepath:string;
 public ingredient:Ingredient[]

 constructor(name:string , descp:string , imgpath:string , ingrd:Ingredient[]){
    this.name=name;
    this.description=descp;
    this.imagepath=imgpath;
    this.ingredient=ingrd
 }

}
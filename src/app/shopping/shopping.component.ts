import { Component, OnInit } from '@angular/core';
import { Ingredient } from './shop.module';
import { ShopServices } from './shop.servies';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredient:Ingredient[]=[];
  
  constructor(private shopsrv:ShopServices) { }

  ngOnInit(): void {
  this.ingredient=this.shopsrv.getIngredient()
  this.shopsrv.Shopupdatenew.subscribe(
    (ingred:Ingredient[])=>{
      this.ingredient = ingred
    }
  )
  }

  selecteddata(id:number){
    this.shopsrv.idsubject.next(id);
  }





}

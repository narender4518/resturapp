import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipes } from '../recipes.module';
import { RecipesServices } from '../recipes.serviecs';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit , OnDestroy {
  recipearray:Recipes[] = []
  subscribedata:Subscription;
  constructor(private recipesrv:RecipesServices ,private route:Router , private activeroute:ActivatedRoute) { }

  ngOnInit() {
   this.subscribedata= this.recipesrv.recipechanged.subscribe(
      (recipe:Recipes[])=>{
        this.recipearray = recipe
        console.log(recipe)
      }
    )
  this.recipearray = this.recipesrv.getrecipe()

  }
  
  redirecto(){
   this.route.navigate(['new' ], {relativeTo:this.activeroute} )
  }

  ngOnDestroy(): void {
    this.subscribedata.unsubscribe()
  }
}

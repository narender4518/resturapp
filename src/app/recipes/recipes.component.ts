import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.module';
import { RecipesServices } from './recipes.serviecs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 // selectedrecipes =[]
  constructor(private recipesrv:RecipesServices) { }

  ngOnInit(): void {
   /* this.recipesrv.recipeselected.subscribe(
      (recipe:Recipes[])=>{
        this.selectedrecipes = recipe
      }
    )*/
  }

}

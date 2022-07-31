import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from '../recipes.module';
import { RecipesServices } from '../recipes.serviecs';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {
  recipearray:Recipes[] = []
  constructor(private recipesrv:RecipesServices ,private route:Router , private activeroute:ActivatedRoute) { }

  ngOnInit() {
  this.recipearray = this.recipesrv.getrecipe()
  }
  
  redirecto(){
   this.route.navigate(['new' ], {relativeTo:this.activeroute} )
  }
}

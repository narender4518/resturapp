import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipes } from '../recipes.module';
import { RecipesServices } from '../recipes.serviecs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Input()  element:Recipes;
@Input()  id:number;  
  constructor(private recipesrv:RecipesServices ) { }

  ngOnInit(): void {
 
     

  }


}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipes } from '../recipes.module';
import { RecipesServices } from '../recipes.serviecs';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  element
  id:number;
  constructor(private recipeSrv:RecipesServices , private actvroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actvroute.params.subscribe(
      (param:Params)=>{
        this.id = +param['id']
        this.element = this.recipeSrv.getrecipewithid(this.id);
      }
    )
  }

}

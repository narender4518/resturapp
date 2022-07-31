import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipes } from '../recipes.module';
import { RecipesServices } from '../recipes.serviecs';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  element:Recipes
  id:number;
  constructor(private recipeSrv:RecipesServices , private actvroute:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.actvroute.params.subscribe(
      (param:Params)=>{
        this.id = +param['id']
        this.element = this.recipeSrv.getrecipewithid(this.id);
      }
    )
  }


  detailtoshopdata(){
    this.recipeSrv.transferdatarecipetoshop(this.element.ingredient)
  }

  toeditcomp(){
   this.router.navigate(['edit'] , {relativeTo:this.actvroute}) 
  }

}

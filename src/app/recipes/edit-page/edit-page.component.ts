import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipes } from '../recipes.module';
import { RecipesServices } from '../recipes.serviecs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
id:number;
EditRecipes=false;
  constructor(private activerot:ActivatedRoute , private RecipeSrv:RecipesServices) { }
 recipeform:FormGroup
  ngOnInit(): void {
   this.activerot.params.subscribe(
    (param:Params)=>{
      this.id=+param['id'];
      this.EditRecipes= +param['id'] != null;
      this.initialform();
    }
   )
  }

  private initialform(){
    let name = '';
    let description='';
    let Imageurl='';
    let ingredArray = new FormArray([])
  
    if(this.EditRecipes){
    let recipe = this.RecipeSrv.getrecipewithid(this.id);
       // name = recipe.name ;
        description = recipe.description ;
        Imageurl = recipe.imagepath ;
     if(recipe['ingredient']){
      for(let ingred of recipe.ingredient){
        ingredArray.push({
          'name': new FormGroup(ingred.name , Validators.required),
          'amount': new FormGroup(ingred.amount ,Validators.required)
        })
      }
     }

   
     


    }

    this.recipeform = new FormGroup({
      'name': new FormControl(name , Validators.required) 

   })
    


  }

}

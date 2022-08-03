import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
ispassword=true;
editformRecipes:FormGroup;

get newingredient(){
  return (this.editformRecipes.get('ingredient') as FormArray ).controls
}

  constructor(private activerot:ActivatedRoute , private RecipeSrv:RecipesServices  , private router:Router) { }


 
  ngOnInit(): void {
   this.activerot.params.subscribe(
    (param:Params)=>{
      this.id=+param['id'];
      this.EditRecipes= param['id'] != null;
       this.initialform()
    }
   )
  }

   private initialform(){
    let recipename= ' ';
    let imagepath='';
    let descripton='';
    let ingredientarray = new FormArray([])
    if(this.EditRecipes){
      let recipe = this.RecipeSrv.getrecipewithid(this.id);
      recipename=recipe.name;
      imagepath=recipe.imagepath;
      descripton=recipe.description;
     if(recipe['ingredient']){
      for(let ingred of recipe.ingredient){
      ingredientarray.push(
         new FormGroup ({
        'name':new FormControl(ingred.name  , Validators.required),
        'amount': new FormControl(ingred.amount , Validators.required)
      }))}
     }

      

    }




     this.editformRecipes= new FormGroup({
          'name': new FormControl(recipename , Validators.required),
          'descript': new FormControl(descripton , Validators.required),
          'Imageurl': new FormControl(imagepath , Validators.required),
          'ingredient':ingredientarray
     })



   }


  onSubmit(){
   const newrecipe= new Recipes(
      this.editformRecipes.value['name'],
      this.editformRecipes.value['descript'],
      this.editformRecipes.value['Imageurl'],
      this.editformRecipes.value['ingredient'],
    )
    if(this.EditRecipes){
      this.RecipeSrv.onupdatedata(this.id , newrecipe);
     // console.log(this.editformRecipes.value)
    }
    else{
      this.RecipeSrv.newdatasomefromeditcomp(newrecipe)
    }

    this.editformRecipes.reset()
    this.router.navigate(['../'], {relativeTo:this.activerot})
  }

  createingredient(){
    (<FormArray>this.editformRecipes.get('ingredient')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount':new FormControl()
      })
    )
  }
  password(){
   this.ispassword = !this.ispassword;
  }
  onclear(){
    this.editformRecipes.reset()
    this.router.navigate(['../'], {relativeTo:this.activerot})
  }
  onDeleteingredient(index:number){
  // this will clear the entire formarray completly  (<FormArray>this.editformRecipes.get('ingredient')).clear()
    (<FormArray>this.editformRecipes.get('ingredient')).removeAt(index)
  }
}

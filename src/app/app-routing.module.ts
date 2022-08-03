import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './recipes/edit-page/edit-page.component';
import { NoPageComponent } from './recipes/no-page/no-page.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { recipesResolve } from './recipes/recipes-resolve';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:'recipes' , component:RecipesComponent , resolve:[recipesResolve] , children:[
    {path:'' , component:NoPageComponent},
    {path:'new' ,component:EditPageComponent },
    {path:':id' , component:RecipesDetailsComponent , resolve:[recipesResolve]},
    {path:':id/edit' , component:EditPageComponent  , resolve:[recipesResolve]}
  ]},
  {path:'Shopping' , component:ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

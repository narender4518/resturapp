import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './recipes/edit-page/edit-page.component';
import { NoPageComponent } from './recipes/no-page/no-page.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:'recipes' , component:RecipesComponent , children:[
    {path:'' , component:NoPageComponent},
    {path:':id' , component:RecipesDetailsComponent},
    {path:':id/edit' , component:EditPageComponent}
  ]},
  {path:'Shopping' , component:ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

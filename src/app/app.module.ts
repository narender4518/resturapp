import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesItemsComponent } from './recipes/recipes-items/recipes-items.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShopEditComponent } from './shopping/shop-edit/shop-edit.component';
import { RecipesDirective } from './recipes.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPageComponent } from './recipes/edit-page/edit-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesItemsComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    ShoppingComponent,
    ShopEditComponent,
    RecipesDirective,
    EditPageComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

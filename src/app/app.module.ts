import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http'
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
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AuthInterceptor } from './auth-interceptor.services';
import { Authservices } from './auth/Auth.services';
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
    EditPageComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { 




}

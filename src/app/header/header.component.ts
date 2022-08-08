import { Component, OnInit } from '@angular/core';
import { Dataservices } from 'src/assets/data.services';
import { Authservices } from '../auth/Auth.services';
import { Recipes } from '../recipes/recipes.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  constructor(private datasrv:Dataservices , private Authsrv:Authservices) { }
 

  
  ngOnInit() {
    this.Authsrv.user.subscribe((user)=>{
    this.isAuthenticated= !!user
    })
  }

  savedata(){
   this.datasrv.sendingdatatoserver()
  }
  onFetchdata(){
    this.datasrv.onFetchdata().subscribe();
  }

  logout(){
    this.Authsrv.onlogout()
  }




}

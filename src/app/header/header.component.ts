import { Component, OnInit } from '@angular/core';
import { Dataservices } from 'src/assets/data.services';
import { Recipes } from '../recipes/recipes.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private datasrv:Dataservices) { }

  ngOnInit(): void {
  }

  savedata(){
   this.datasrv.sendingdatatoserver()
  }
  onFetchdata(){
    this.datasrv.onFetchdata().subscribe();
  }
}

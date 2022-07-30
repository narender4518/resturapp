import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shop.module';
import { ShopServices } from '../shop.servies';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {
  @ViewChild('form') signupform:NgForm;
  getid:number
  datagot:Ingredient
  EditMode=false;




  constructor(private shopsrv:ShopServices) { }




  onAdd(form:NgForm){
    const value = form.value
   const newingred = new Ingredient(value.iteam ,value.amount)
 
   
   if(this.EditMode){
    this.shopsrv.onUpdatedata(this.getid , newingred);
   }else{
    this.shopsrv.datagetting(newingred)
   }
   this.EditMode=false;
   this.signupform.reset()



  }

  onclear(){
    this.signupform.reset()
  }


  ondelete(){
    this.shopsrv.ondelete(this.getid);
    this.signupform.reset()

  }



  ngOnInit()  {
    this.shopsrv.idsubject.subscribe(
      (id:number)=>{
        this.getid = id;
        this.EditMode=true;
     this.datagot= this.shopsrv.iddatagetting(this.getid);
        this.signupform.setValue({
          iteam:this.datagot.name,
          amount:this.datagot.amount 
        })
      }
    )
  }

}

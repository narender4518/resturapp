import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRecipes]'
})
export class RecipesDirective {

  constructor() { }
  
    @HostBinding('class.open') isopen=false;
    @HostListener('click') toggleopen(){
      this.isopen= !this.isopen
    };
   
}

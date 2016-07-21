import { Injectable } from '@angular/core';
import { Recipe } from "./recipe"

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
  new Recipe ('ice cream', 'ice cream', 'http://image.shutterstock.com/z/stock-photo-ice-cream-scoops-with-wafer-bowl-on-white-background-160796576.jpg',[]),
  new Recipe ('spaghetti','spaghetti' ,'http://cdn.noticiaaldia.com/wp-content/uploads/2014/09/spaghetti-bolognesa.jpg',[])
  ];
  constructor() {}

  getRecipes(){
    return this.recipes;
  }
}

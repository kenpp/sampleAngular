import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe';
import { RECIPE_DATA } from './recipe/recipeData';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeData: Recipe[] = RECIPE_DATA;

  constructor() { }

  getRecipeData(): Recipe[] {
    return this.recipeData;
  }

  public getRecipe(id: string): Recipe | undefined {
    return this.recipeData.find(recipe => recipe.id.toString() == id);
  }

  public searchRecipe(keyword: string): Recipe[] {
    let resultArr: Recipe[] = [];

    for (let recipe of this.recipeData) {
      let dataStr = JSON.stringify(recipe);
      if (dataStr.search(keyword) >= 0) {
        resultArr.push(recipe);
      }
    }

    return resultArr;
  }
}

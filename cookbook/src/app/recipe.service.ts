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

  getRecipe(id: string): Recipe | undefined {
    return this.recipeData.find(recipe => recipe.id.toString() == id);
  }
}

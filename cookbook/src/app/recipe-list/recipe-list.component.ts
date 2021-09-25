import { Component, OnInit } from '@angular/core';
import { RECIPE_DATA } from '../recipe/recipeData';
import { Recipe } from '../recipe/recipe';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeData: Recipe[];

  constructor(private rsv: RecipeService) { }

  ngOnInit(): void {
    this.recipeData = this.rsv.getRecipeData();
  }

  public searchRecipe(keyword: string) {
    this.recipeData = this.rsv.searchRecipe(keyword);
  }

}

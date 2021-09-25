import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe/recipe';
import { RECIPE_DATA } from '../recipe/recipeData';
@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css']
})
export class RecipeDataComponent implements OnInit {
  recipeId: string | null;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get("id");
    const recipe = RECIPE_DATA.find(recipe => recipe.id.toString() == this.recipeId);
    if (recipe) {
      this.recipe = recipe;
    }
  }

  public backToList() {
    this.location.back();
  }

}

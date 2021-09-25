import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css']
})
export class RecipeDataComponent implements OnInit {
  recipeId: string | null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get("id");
  }

  public backToList() {
    this.location.back();
  }

}

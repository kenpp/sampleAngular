import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css']
})
export class RecipeDataComponent implements OnInit {
  recipeId: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get("id");
  }

}

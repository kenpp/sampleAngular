import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';

const routes: Routes = [
  { path: "", redirectTo: "/recipe-list", pathMatch: "full" },
  { path: "recipe-list", component: RecipeListComponent },
  { path: "recipe-data/:id", component: RecipeDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

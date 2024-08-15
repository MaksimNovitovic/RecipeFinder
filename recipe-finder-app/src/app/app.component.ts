import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { IngredientService } from './services/ingredient.service';
import { Recipe } from './models/recipe';
import { Ingredient } from './models/ingredient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = [];
  ingredients: Ingredient[] = [];
  selectedIngredients: string[] = [];

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((recipes) => (this.recipes = recipes));
    this.ingredientService.getIngredients().subscribe((ingredients) => (this.ingredients = ingredients));
  }

  onIngredientSelected(ingredientName: string): void {
    if (this.selectedIngredients.includes(ingredientName)) {
      this.selectedIngredients = this.selectedIngredients.filter(name => name !== ingredientName);
    } else {
      this.selectedIngredients.push(ingredientName);
    }
  }

}

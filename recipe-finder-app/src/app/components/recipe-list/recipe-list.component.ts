import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[] = [];
  @Input() selectedIngredients: string[] = [];

  isRecipeAvailable(recipe: Recipe): boolean {
    return recipe.ingredients.every(ingredient =>
      this.selectedIngredients.includes(ingredient)
    );
  }
}

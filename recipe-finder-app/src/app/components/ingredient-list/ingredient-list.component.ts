import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent {
  @Input() ingredients: Ingredient[] = [];
  @Output() ingredientSelected = new EventEmitter<string>();
  selectedIngredients: string[] = [];

  toggleIngredientSelection(ingredient: Ingredient): void {
    ingredient.selected = !ingredient.selected;
 
    this.ingredientSelected.emit(ingredient.name);
  }
}

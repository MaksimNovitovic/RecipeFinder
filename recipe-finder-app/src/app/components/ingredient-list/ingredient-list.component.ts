import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent {
  @Input() ingredients: Ingredient[] = [];
  @Output() ingredientSelected = new EventEmitter<string[]>();
  selectedIngredients: string[] = [];

  toggleIngredientSelection(ingredient: Ingredient): void {
    ingredient.selected = !ingredient.selected;

    if (ingredient.selected) {
      this.selectedIngredients.push(ingredient.name);
    } else {
      this.selectedIngredients = this.selectedIngredients.filter(name => name !== ingredient.name);
    }

    this.ingredientSelected.emit(this.selectedIngredients);
  }

  onIngredientSelected(event: any): void {
    this.ingredientSelected.emit(this.selectedIngredients);
  }

  onIngredientDeselected(event: any): void {
    this.ingredientSelected.emit(this.selectedIngredients);
  }
}

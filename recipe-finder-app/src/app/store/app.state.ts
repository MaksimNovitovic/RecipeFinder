import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';

export interface AppState {
  ingredients: Ingredient[];
  recipes: Recipe[];
  selectedIngredients: Ingredient[];
}

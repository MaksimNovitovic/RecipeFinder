import { createReducer, on } from '@ngrx/store';
import { loadRecipesSuccess, selectIngredient, deselectIngredient } from './recipe.actions';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

export interface RecipeState {
  recipes: Recipe[];
  selectedIngredients: Ingredient[];
}

const initialState: RecipeState = {
  recipes: [],
  selectedIngredients: []
};

export const recipeReducer = createReducer(
  initialState,
  on(loadRecipesSuccess, (state, { recipes }) => ({ ...state, recipes })),
  on(selectIngredient, (state, { ingredient }) => ({
    ...state,
    selectedIngredients: [...state.selectedIngredients, ingredient]
  })),
  on(deselectIngredient, (state, { ingredient }) => ({
    ...state,
    selectedIngredients: state.selectedIngredients.filter(ingredientSelected => ingredientSelected.id !== ingredient.id)
  }))
);

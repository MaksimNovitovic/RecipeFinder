import { createReducer, on } from '@ngrx/store';
import { selectIngredient, deselectIngredient } from './recipe.actions';
import { Ingredient } from '../models/ingredient';

const initialState: Ingredient[] = [];

export const ingredientReducer = createReducer(
  initialState,
  on(selectIngredient, (state, { ingredient }) => [...state, ingredient]),
  on(deselectIngredient, (state, { ingredient }) => state.filter(deselectedIngredient => deselectedIngredient.id !== ingredient.id))
);

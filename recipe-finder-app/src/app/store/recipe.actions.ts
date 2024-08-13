import { createAction, props } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

export const loadRecipes = createAction('Recipes');
export const loadRecipesSuccess = createAction('Recipes Success', props<{ recipes: Recipe[] }>());
export const loadRecipesFailure = createAction('Recipes Failure', props<{ error: string }>());

export const selectIngredient = createAction('Selected Ingredient', props<{ ingredient: Ingredient }>());
export const deselectIngredient = createAction('Deselected Ingredient', props<{ ingredient: Ingredient }>());

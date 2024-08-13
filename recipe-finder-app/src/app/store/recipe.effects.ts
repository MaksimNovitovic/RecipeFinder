import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecipeService } from '../services/recipe.service';
import { loadRecipes, loadRecipesSuccess, loadRecipesFailure } from './recipe.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RecipeEffects {
  loadRecipes$ = createEffect(() => this.actions$.pipe(
    ofType(loadRecipes),
    mergeMap(() => this.recipeService.getRecipes().pipe(
      map(recipes => loadRecipesSuccess({ recipes })),
      catchError(error => of(loadRecipesFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}
}

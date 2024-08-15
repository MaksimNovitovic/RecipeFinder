import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';
import * as recipesJson from '../../app/assets/recipes.json';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = (recipesJson as any).recipes;

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }
}
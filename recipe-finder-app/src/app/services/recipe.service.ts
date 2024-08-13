import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';
import recipes from '../../app/assets/recipes.json';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  getRecipes(): Observable<Recipe[]> {
    return of(recipes);
  }
}

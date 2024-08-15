import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import ingredients from '../../app/assets/ingredients.json';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  getIngredients(): Observable<Ingredient[]> {
    return of(ingredients.ingredients.map((ingredient: any) => ({ ...ingredient, selected: false })));
  }
}

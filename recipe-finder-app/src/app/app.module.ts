import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { recipeReducer } from './store/recipe.reducer';
import { ingredientReducer } from './store/ingredient.reducer';
import { RecipeEffects } from './store/recipe.effects';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ recipes: recipeReducer, ingredients: ingredientReducer }),
    EffectsModule.forRoot([RecipeEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

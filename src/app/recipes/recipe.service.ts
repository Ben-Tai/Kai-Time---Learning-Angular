import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Chicken Soup',
          'yummy yummy!',
          'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
            [
            new Ingredient ('chicken', 2),
            new Ingredient ('apples', 2)
            ]
        ),
        new Recipe(
          'Yummy burger',
          'Delicious burger that will make you fat',
          'http://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger.jpg',
            [
             new Ingredient ('beef patties', 2),
             new Ingredient ('lettuce', 1),
             new Ingredient ('tomatoes', 1)
            ]
        )
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}

import {
  TOGGLE_SHOW_RECIPES,
  TOGGLE_SHOW_ADD_RECIPE,
  ADD_INGREDIENTS_TO_NEW_RECIPE,
  INCREASE_COUNT,
  ADD_NAME_TO_NEW_RECIPE,
  ADD_NEW_RECIPE,
  CLEAR_NEW_RECIPE,
  RESET_COUNT,
  ADD_DESCRIPTION,
  CLEAR_STATE,
  REMOVE_A_RECIPE,
  TOGGLE_THEME,
} from './actions';

import { nanoid } from 'nanoid';

const reducer = (state, action) => {
  //for each case:
  //must have const returnData being equal to the data to be returned
  //must have:
  //localStorage.setItem('recipes', JSON.stringify(returnData));
  //return returnData;

  if (action.type === TOGGLE_SHOW_RECIPES) {
    const returnData = {
      ...state,
      isRecipesDisplayed: !state.isRecipesDisplayed,
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === TOGGLE_SHOW_ADD_RECIPE) {
    const returnData = {
      ...state,
      isAddRecipeDisplayed: !state.isAddRecipeDisplayed,
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === ADD_NAME_TO_NEW_RECIPE) {
    const returnData = {
      ...state,
      recipeToAdd: {
        ...state.recipeToAdd,
        name: action.payload.recipe_name,
      },
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === ADD_INGREDIENTS_TO_NEW_RECIPE) {
    const returnData = {
      ...state,
      recipeToAdd: {
        ...state.recipeToAdd,
        ingredients_list: [
          ...state.recipeToAdd.ingredients_list,
          ...action.payload.ingredients_values,
        ],
      },
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === ADD_NEW_RECIPE) {
    //adds an unique id to the recipe dictionary
    const recipeToBeAdded = { ...state.recipeToAdd, id: nanoid() };

    const returnData = {
      ...state,
      recipes: [...state.recipes, recipeToBeAdded],
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === CLEAR_NEW_RECIPE) {
    const returnData = {
      ...state,
      recipeToAdd: {
        ingredients_list: [],
      },
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === INCREASE_COUNT) {
    const returnData = {
      ...state,
      count: state.count + 1,
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === RESET_COUNT) {
    const returnData = {
      ...state,
      count: 1,
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === ADD_DESCRIPTION) {
    const returnData = {
      ...state,
      recipeToAdd: {
        ...state.recipeToAdd,
        description: action.payload.recipe_description,
      },
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === CLEAR_STATE) {
    const returnData = {
      recipes: [],
      recipeToAdd: {
        ingredients_list: [],
      },
      isRecipesDisplayed: true,
      isAddRecipeDisplayed: false,
      count: 1,
      dark_theme: state.theme,
    };
    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === REMOVE_A_RECIPE) {
    const newRecipes = [];

    //adds all recipes to newRecipes list besides the only who's id is equal to the payload id
    state.recipes.forEach((recipe) => {
      if (recipe.id !== action.payload.recipe_id) {
        newRecipes.push(recipe);
      }
    });

    const returnData = { ...state, recipes: newRecipes };

    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  if (action.type === TOGGLE_THEME) {
    const returnData = { ...state, dark_theme: !state.dark_theme };

    // ! ------ return & local storage data ------ !
    localStorage.setItem('recipes', JSON.stringify(returnData));
    return returnData;
    // ! ------ --------------------------- ------ !
  }

  throw new Error(`No matching ${action.type} ---> Action type`);
};

export default reducer;

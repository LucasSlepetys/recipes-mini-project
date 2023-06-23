import {
  TOGGLE_SHOW_RECIPES,
  TOGGLE_SHOW_ADD_RECIPE,
  ADD_INGREDIENT_TO_NEW_RECIPE,
  INCREASE_COUNT,
  ADD_NAME_TO_NEW_RECIPE,
  ADD_NEW_RECIPE,
  CLEAR_NEW_RECIPE,
  RESET_COUNT,
} from './actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_SHOW_RECIPES) {
    return { ...state, isRecipesDisplayed: !state.isRecipesDisplayed };
  }
  if (action.type === TOGGLE_SHOW_ADD_RECIPE) {
    return { ...state, isAddRecipeDisplayed: !state.isAddRecipeDisplayed };
  }

  if (action.type === ADD_NAME_TO_NEW_RECIPE) {
    return {
      ...state,
      recipeToAdd: {
        ...state.recipeToAdd,
        name: action.payload.recipe_name,
      },
    };
  }

  if (action.type === ADD_INGREDIENT_TO_NEW_RECIPE) {
    return {
      ...state,
      recipeToAdd: {
        ...state.recipeToAdd,
        [action.payload.ingredient_id]: action.payload.ingredient_value,
      },
    };
  }

  if (action.type === ADD_NEW_RECIPE) {
    return {
      ...state,
      recipes: state.recipeToAdd,
    };
  }

  if (action.type === CLEAR_NEW_RECIPE) {
    return {
      ...state,
      recipeToAdd: {
        name: 'Name_Default',
      },
    };
  }

  if (action.type === INCREASE_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === RESET_COUNT) {
    return {
      ...state,
      count: 1,
    };
  }
  throw new Error(`No matching ${action.type} ---> Action type`);
};

export default reducer;

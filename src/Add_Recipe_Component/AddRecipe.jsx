import Form from './Form';
import Footer from './Footer';
import Ingredient from './Form_Row';
import { getContext } from '../CONTROL/GlobalContext';
import {
  TOGGLE_SHOW_ADD_RECIPE,
  INCREASE_COUNT,
  ADD_NAME_TO_NEW_RECIPE,
  ADD_NEW_RECIPE,
  CLEAR_NEW_RECIPE,
  RESET_COUNT,
  ADD_INGREDIENTS_TO_NEW_RECIPE,
} from '../CONTROL/actions';
import { useEffect, useRef } from 'react';
import Description from './Description';

const AddRecipe = () => {
  const { dispatch, RecipeFormRef } = getContext();

  useEffect(() => {
    //gets the cursor focused on the recipe_name input
    //path must be changed if any changes are made in Form
    RecipeFormRef.current.children[0].children[0].focus();
  }, []);

  //clears AddRecipe component page
  const reset_action = () => {
    dispatch({ type: CLEAR_NEW_RECIPE });
    dispatch({ type: TOGGLE_SHOW_ADD_RECIPE });
    dispatch({ type: RESET_COUNT });
  };

  const add_recipe = () => {
    //FORM API -- getting data from RecipeFormRef
    const formData = new FormData(RecipeFormRef.current);
    const formInputs = Object.fromEntries(formData);
    //----
    const listOfIngredients = [];
    //gets all ingredients names from inputs in the RecipeFormRef and pushes its strings to listOfIngredients list
    //it doesn't push any empty inputs or input's values that are equal to the recipe_name input value
    for (let key in formInputs) {
      if (
        formInputs[key] !== '' &&
        formInputs[key] !== null &&
        formInputs[key] !== formInputs.recipe_name
      ) {
        listOfIngredients.push(formInputs[key]);
      }
    }

    //Makes it not possible to add a recipe if user hasn't provided a name for the recipe or at least one ingredient
    if (listOfIngredients.length === 0 || formInputs.recipe_name === '') {
      return;
    }

    //adds name and ingredients to state newRecipe
    dispatch({
      type: ADD_INGREDIENTS_TO_NEW_RECIPE,
      payload: { ingredients_values: listOfIngredients },
    });
    dispatch({
      type: ADD_NAME_TO_NEW_RECIPE,
      payload: {
        recipe_name: formInputs.recipe_name,
      },
    });
    //adds the newRecipe dictionary to the recipes list in state
    dispatch({ type: ADD_NEW_RECIPE });
    //clears the page/screen for next recipe
    reset_action();
  };

  return (
    <>
      <Form />
      <Footer reset_action={reset_action} add_recipe={add_recipe} />
      <Description />
    </>
  );
};

export default AddRecipe;

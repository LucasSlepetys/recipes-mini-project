import AddRecipeFooter from './AddRecipeFooter';
import Ingredient from './Ingredient';
import { getContext } from './CONTROL/GlobalContext';
import {
  TOGGLE_SHOW_ADD_RECIPE,
  INCREASE_COUNT,
  ADD_NAME_TO_NEW_RECIPE,
  ADD_NEW_RECIPE,
  CLEAR_NEW_RECIPE,
  RESET_COUNT,
} from './CONTROL/actions';
import { useEffect, useRef } from 'react';

const AddRecipe = () => {
  const { state, dispatch } = getContext();
  const recipeNameRef = useRef(null);

  useEffect(() => {
    recipeNameRef.current.focus();
  }, []);

  const reset_action = () => {
    dispatch({ type: CLEAR_NEW_RECIPE });
    dispatch({ type: TOGGLE_SHOW_ADD_RECIPE });
    dispatch({ type: RESET_COUNT });
  };

  const add_recipe = () => {
    dispatch({
      type: ADD_NAME_TO_NEW_RECIPE,
      payload: {
        recipe_name: recipeNameRef.current.value,
      },
    });
    dispatch({ type: ADD_NEW_RECIPE });
    reset_action();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: INCREASE_COUNT });
  };

  return (
    <>
      <div className='add_recipe_container'>
        <form onSubmit={handleSubmit}>
          <div className='input_row' style={{ padding: '20px' }}>
            <label
              htmlFor='recipe_name'
              style={{ fontSize: '2rem', textAlign: 'center' }}
            >
              Recipe Name
            </label>
            <input type='text' id='recipe_name' ref={recipeNameRef} />
          </div>

          {Array.apply(null, { length: state.count }).map((e, i) => {
            return (
              <Ingredient key={i} id={`ingredient_${i + 1}`} num={i + 1} />
            );
          })}

          <div className='center-child'>
            <button type='submit' className='btn'>
              Add New Ingredient
            </button>
          </div>
        </form>
      </div>
      <AddRecipeFooter reset_action={reset_action} add_recipe={add_recipe} />
    </>
  );
};

export default AddRecipe;

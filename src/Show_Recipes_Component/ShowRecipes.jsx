import SingleRecipe from './SingleRecipe';
import { getContext } from '../CONTROL/GlobalContext';
import { nanoid } from 'nanoid';
import { TOGGLE_SHOW_RECIPES, CLEAR_STATE } from '../CONTROL/actions';

const ShowRecipes = () => {
  const { state, dispatch } = getContext();
  return (
    <>
      <div className='recipes_container'>
        {state.recipes.length ? (
          <ul className='list_of_recipes'>
            {state.recipes.map((recipe) => {
              return <SingleRecipe key={nanoid()} {...recipe} />;
            })}
          </ul>
        ) : (
          <h5>No recipes yet!</h5>
        )}
      </div>
      <button
        type='button'
        className='floating-btn btn float-left-bottom'
        onClick={() => {
          dispatch({ type: TOGGLE_SHOW_RECIPES });
        }}
      >
        Back
      </button>
      <button
        type='button'
        className='floating-btn btn float-right-bottom'
        onClick={() => {
          dispatch({ type: CLEAR_STATE });
        }}
      >
        Clear
      </button>
    </>
  );
};

export default ShowRecipes;

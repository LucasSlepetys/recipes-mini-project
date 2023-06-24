import SingleRecipe from './SingleRecipe';
import { getContext } from '../CONTROL/GlobalContext';
import { nanoid } from 'nanoid';
import { TOGGLE_SHOW_RECIPES } from '../CONTROL/actions';

const ShowRecipes = () => {
  const { state, dispatch } = getContext();
  return (
    <>
      <div className='recipes_container'>
        <ul className='list_of_recipes'>
          {state.recipes.map((recipe) => {
            return <SingleRecipe key={nanoid()} {...recipe} />;
          })}
        </ul>
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
    </>
  );
};

export default ShowRecipes;

import { getContext } from '../CONTROL/GlobalContext';
import {
  TOGGLE_SHOW_RECIPES,
  TOGGLE_SHOW_ADD_RECIPE,
} from '../CONTROL/actions';

const Hero = () => {
  const { dispatch } = getContext();

  return (
    <div className='hero'>
      <button
        type='button'
        className='btn btn-reshape'
        onClick={() => {
          dispatch({ type: TOGGLE_SHOW_RECIPES });
        }}
      >
        Show Recipes
      </button>
      <button
        type='button'
        className='btn btn-reshape'
        onClick={() => {
          dispatch({ type: TOGGLE_SHOW_ADD_RECIPE });
        }}
      >
        Add Recipe
      </button>
    </div>
  );
};

export default Hero;

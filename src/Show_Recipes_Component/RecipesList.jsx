import React from 'react';
import SingleRecipe from './SingleRecipe';
import { nanoid } from 'nanoid';
import { getContext } from '../CONTROL/GlobalContext';
function RecipesList({}) {
  const { state } = getContext();

  return (
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
  );
}

export default RecipesList;

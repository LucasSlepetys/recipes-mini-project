import React from 'react';
import Form_Row from './Form_Row';
import { INCREASE_COUNT } from '../CONTROL/actions';
import { getContext } from '../CONTROL/GlobalContext';
function Form({}) {
  const { state, dispatch, RecipeFormRef } = getContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: INCREASE_COUNT });
  };

  return (
    <div className='add_recipe_container'>
      <form onSubmit={handleSubmit} ref={RecipeFormRef}>
        <div className='input_row'>
          <label htmlFor='recipe_name' className='name-label'>
            Recipe Name
          </label>
          <input
            type='text'
            id='recipe_name'
            name='recipe_name'
            className='name-input'
            placeholder='Risotto'
          />
        </div>

        {Array.apply(null, {
          length: state.count,
        }).map((e, i) => {
          return <Form_Row key={i} id={`ingredient_${i + 1}`} num={i + 1} />;
        })}

        <div className='center-child'>
          <button type='submit' className='btn'>
            ADD NEW INGREDIENT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

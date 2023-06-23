import React, { useEffect, useRef } from 'react';
import { ADD_INGREDIENT_TO_NEW_RECIPE } from './CONTROL/actions';
import { getContext } from './CONTROL/GlobalContext';
function Ingredient({ id, num }) {
  const { dispatch } = getContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = () => {
    dispatch({
      type: ADD_INGREDIENT_TO_NEW_RECIPE,
      payload: { ingredient_id: id, ingredient_value: inputRef.current.value },
    });
  };

  return (
    <div className='input_row'>
      <label htmlFor={id}>Ingredient {num}:</label>
      <input type='text' id={id} ref={inputRef} onChange={handleChange} />
    </div>
  );
}
export default Ingredient;

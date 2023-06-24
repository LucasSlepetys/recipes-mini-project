import React, { useEffect, useRef } from 'react';
import { getContext } from '../CONTROL/GlobalContext';
function Ingredient({ id, num }) {
  const { dispatch } = getContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='input_row'>
      <label htmlFor={id}>Ingredient {num}:</label>
      <input
        type='text'
        name={id}
        id={id}
        ref={inputRef}
        placeholder={num === 1 ? '400 Grams of Rice' : ''}
      />
    </div>
  );
}
export default Ingredient;

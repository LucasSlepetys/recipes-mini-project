import React, { useEffect, useRef } from 'react';
function Form_Row({ id, num }) {
  //ref only used for useEffect and set cursor to focus
  const inputRef = useRef(null);

  //sets cursor to focus when new input is created
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='input_row'>
      <label htmlFor={id}>Ingredient {num}</label>
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
export default Form_Row;

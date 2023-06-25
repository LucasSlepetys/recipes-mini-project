import React, { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { getContext } from '../CONTROL/GlobalContext';
import { TOGGLE_THEME } from '../CONTROL/actions';

export function ThemeToggle({}) {
  const { state, dispatch } = getContext();

  useEffect(() => {
    console.log(state.dark_theme);
  }, []);

  return (
    <div className='float-top-right'>
      <input
        type='checkbox'
        className='checkbox'
        id='checkbox'
        checked={state.dark_theme}
        onChange={() => {
          dispatch({ type: TOGGLE_THEME });
        }}
      />
      <label htmlFor='checkbox' className='checkbox-label'>
        <i className='fas fa-moon'>
          <FaMoon />
        </i>
        <i className='fas fa-sun'>
          <FaSun />
        </i>
        <span className='ball'></span>
      </label>
    </div>
  );
}

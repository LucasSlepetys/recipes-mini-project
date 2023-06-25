import React from 'react';
import { TOGGLE_SHOW_RECIPES, CLEAR_STATE } from '../CONTROL/actions';
import { getContext } from '../CONTROL/GlobalContext';

function Footer({}) {
  const { dispatch } = getContext();

  return (
    <>
      <button
        type='button'
        className='floating-btn btn float-left-bottom'
        onClick={() => {
          dispatch({
            type: TOGGLE_SHOW_RECIPES,
          });
        }}
      >
        Back
      </button>
      <button
        type='button'
        className='floating-btn btn float-right-bottom'
        onClick={() => {
          dispatch({
            type: CLEAR_STATE,
          });
        }}
      >
        Clear
      </button>
    </>
  );
}

export default Footer;

import React from 'react';
import { getContext } from '../CONTROL/GlobalContext';
function AddRecipeFooter({ reset_action, add_recipe }) {
  const { showModal } = getContext();
  return (
    <div className='footer_container'>
      <div className='buttons_container'>
        <button
          type='button'
          className='floating-btn btn'
          onClick={reset_action}
        >
          Cancel
        </button>
        <button
          type=' button'
          className='btn long-btn bg-switch'
          onClick={showModal}
        >
          Add Description
        </button>
        <button type='button' className='floating-btn btn' onClick={add_recipe}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddRecipeFooter;

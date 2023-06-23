import React from 'react';
function AddRecipeFooter({ reset_action, add_recipe }) {
  return (
    <div className='footer_container'>
      <button type='button' className='floating-btn btn' onClick={reset_action}>
        Cancel
      </button>
      <button type='button' className='btn bg-switch'>
        Add Description
      </button>
      <button type='button' className='floating-btn btn' onClick={add_recipe}>
        Add
      </button>
    </div>
  );
}

export default AddRecipeFooter;

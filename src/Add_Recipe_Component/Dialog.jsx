import { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { getContext } from '../CONTROL/GlobalContext';
import { ADD_DESCRIPTION } from '../CONTROL/actions';

const Dialog = () => {
  const { dialogRef, closeModal, dispatch } = getContext();

  const textareaRef = useRef();

  const handleChange = () => {
    dispatch({
      type: ADD_DESCRIPTION,
      payload: {
        recipe_description: textareaRef.current.value,
      },
    });
  };

  return (
    <dialog ref={dialogRef}>
      <div className='modal'>
        <h3>Enter Recipe Description:</h3>
        <textarea ref={textareaRef} onChange={handleChange}></textarea>
        <FaTimes className='close-icon' onClick={closeModal} />
      </div>
    </dialog>
  );
};

export default Dialog;

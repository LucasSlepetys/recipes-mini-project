import { createContext, useContext, useReducer, useRef } from 'react';
import reducer from './reducer';

const Context = createContext();

const defaultState = {
  recipes: [],
  recipeToAdd: {
    name: 'Name_Default',
    description: 'description',
  },
  isRecipesDisplayed: false,
  isAddRecipeDisplayed: false,
  count: 1,
};

export const getContext = () => {
  return useContext(Context);
};

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // ! -----------Ref + Function for Dialog box ------------ !

  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close();
  };

  const showModal = () => {
    dialogRef.current.showModal();
  };

  // !! -------------------------------------------- !!

  const globalValues = {
    state,
    dispatch,
    dialogRef,
    closeModal,
    showModal,
  };

  return <Context.Provider value={globalValues}>{children}</Context.Provider>;
};

export default GlobalContext;

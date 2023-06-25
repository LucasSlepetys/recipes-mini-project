import { createContext, useContext, useReducer, useRef } from 'react';
import reducer from './reducer';

const Context = createContext();

//structure the data is stored in the application
export const structure = {
  recipes: [],
  recipeToAdd: {
    ingredients_list: [],
  },
  isRecipesDisplayed: false,
  isAddRecipeDisplayed: false,
  count: 1,
  dark_theme: false,
};

//gets data from local storage
//if local storage is empty it sets it to the default structure of the project
const defaultState = JSON.parse(
  localStorage.getItem('recipes') || JSON.stringify(structure)
);

//function to get all values from context
export const getContext = () => {
  return useContext(Context);
};

const GlobalContext = ({ children }) => {
  //global useReducer
  const [state, dispatch] = useReducer(reducer, defaultState);
  //Ref for AddRecipe FORM
  const RecipeFormRef = useRef(null);

  // ! ----------- Dialog Ref + Function for Dialog box ------------ !

  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close();
  };

  const showModal = () => {
    dialogRef.current.showModal();
  };

  // !! -------------------------------------------- !

  //variables available in the globalContext
  const globalValues = {
    state,
    dispatch,
    dialogRef,
    closeModal,
    showModal,
    RecipeFormRef,
  };

  return <Context.Provider value={globalValues}>{children}</Context.Provider>;
};

export default GlobalContext;

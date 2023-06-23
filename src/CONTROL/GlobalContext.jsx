import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const Context = createContext();

const defaultState = {
  recipes: [],
  recipeToAdd: {
    name: 'Name_Default',
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

  const globalValues = {
    state,
    dispatch,
  };

  return <Context.Provider value={globalValues}>{children}</Context.Provider>;
};

export default GlobalContext;

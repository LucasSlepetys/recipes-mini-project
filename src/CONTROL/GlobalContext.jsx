import { createContext, useContext, useReducer, useRef } from 'react';
import reducer from './reducer';

const Context = createContext();

const defaultState = {
  recipes: [
    {
      name: 'risotto recipe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      ingredients_list: [
        '500 grams of rice',
        '200 grams of butter',
        'Onions',
        'Tomatoes',
        'Olive Oil',
      ],
    },
    {
      name: 'Mediterranean Quinoa Salad',
      description:
        'Enjoy a healthy and refreshing Mediterranean Quinoa Salad that bursts with flavors and colors. This salad is packed with nutritious ingredients like quinoa, fresh vegetables, and tangy feta cheese. Its perfect as a light lunch or a side dish for any occasion',
      ingredients_list: [
        '1 cup of quinoa',
        '2 cups of water',
        '1 cucumber, diced',
        '1 red bell pepper, diced',
        '1 cup of cherry tomatoes, halved',
        '1/2 cup of Kalamata olives, pitted and sliced',
        '1/4 cup of red onion, finely chopped',
        '1/2 cup of crumbled feta cheese',
        '1/4 cup of fresh parsley, chopped',
        '1/4 cup of fresh mint leaves, chopped',
        'Juice of 1 lemon',
        '3 tablespoons of extra virgin olive oil',
        'Salt and pepper to taste',
      ],
    },
    {
      name: 'Spicy Thai Noodle Stir-Fry',
      description:
        "Experience the bold and vibrant flavors of Thai cuisine with this Spicy Thai Noodle Stir-Fry. This dish combines tender noodles, fresh vegetables, and a spicy sauce that will tantalize your taste buds. It's quick and easy to make, perfect for a weeknight dinner.",
      ingredients_list: [
        '200 grams of rice noodles',
        '1 tablespoon of vegetable oil',
        '2 cloves of garlic, minced',
        '1 small onion, sliced',
        '1 red bell pepper, julienned',
        '1 carrot, julienned',
        '100 grams of snow peas',
        '200 grams of tofu, cubed',
        '2 tablespoons of soy sauce',
        '1 tablespoon of oyster sauce',
        '1 tablespoon of sriracha sauce',
        '1 tablespoon of lime juice',
        'Fresh cilantro for garnish',
      ],
    },
  ],
  recipeToAdd: {
    name: 'Name_Default',
    description: 'description',
    ingredients_list: [],
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

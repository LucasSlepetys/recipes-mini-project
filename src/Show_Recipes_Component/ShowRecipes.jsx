import RecipesList from './RecipesList';
import Footer from './Footer';

import { getContext } from '../CONTROL/GlobalContext';

const ShowRecipes = () => {
  return (
    <>
      <RecipesList />
      <Footer />
    </>
  );
};

export default ShowRecipes;

import { useEffect } from 'react';
import { getContext } from './CONTROL/GlobalContext';
import Hero from './Hero_Component/Hero';
import AddRecipe from './Add_Recipe_Component/AddRecipe';
import ShowRecipes from './Show_Recipes_Component/ShowRecipes';

function App() {
  const { state } = getContext();

  return (
    <main>
      {!state.isRecipesDisplayed && !state.isAddRecipeDisplayed && <Hero />}
      {state.isAddRecipeDisplayed && <AddRecipe />}
      {state.isRecipesDisplayed && <ShowRecipes />}
    </main>
  );
}

export default App;

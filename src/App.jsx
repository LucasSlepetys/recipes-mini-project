import { useEffect } from 'react';
import { getContext } from './CONTROL/GlobalContext';
import Hero from './Hero';
import AddRecipe from './AddRecipe';

function App() {
  const { state } = getContext();

  return (
    <main>
      {!state.isRecipesDisplayed && !state.isAddRecipeDisplayed && <Hero />}
      {state.isAddRecipeDisplayed && <AddRecipe />}
    </main>
  );
}

export default App;

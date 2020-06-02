import React, { useState } from "react";

import { initialRecipes } from "../recipeData";
import RecipeList, { numberOfIngredients } from "../components/RecipeList";

const RecipePage = () => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [recipesToShowDetails, setRecipesToShowDetails] = useState([1]);

  const [onlySimple, setOnlySimple] = useState(false);

  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  const addOrRemoveRecipeIdToShowDetails = (recipeId) => {
    if (recipesToShowDetails.includes(recipeId)) {
      setRecipesToShowDetails(
        recipesToShowDetails.filter((recId) => recId !== recipeId)
      );
    } else {
      setRecipesToShowDetails([...recipesToShowDetails, recipeId]);
    }
  };

  const recipesToRender = !onlySimple
    ? recipes
    : recipes.filter((recipe) => numberOfIngredients(recipe) < 8);

  const recipesWithDetails = recipesToRender.map(recipe => {
    return {
      ...recipe,
      showDetails: recipesToShowDetails.includes(recipe.id)
    }
  })

  return (
    <div className="recipes">
      <button onClick={() => setOnlySimple(!onlySimple)}>
        {onlySimple ? "Show all" : "Show only simple recipes"}
      </button>
      <RecipeList
        recipesToRender={recipesWithDetails}
        deleteRecipe={deleteRecipe}
        detailRecipeIds={recipesToShowDetails}
        toggleShowRecipeDetails={addOrRemoveRecipeIdToShowDetails}
      />
    </div>
  );
};

export default RecipePage;



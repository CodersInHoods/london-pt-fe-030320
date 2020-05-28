import React, { useState } from "react";

import { initialRecipes } from "./recipeData";

const RecipeList = () => {
  const [recipes, setRecipes] = useState(initialRecipes);

  const [onlySimple, setOnlySimple] = useState(false);

  const ingredientsAsArray = (recipe) => recipe.ingredients.split(", ");
  const numberOfIngredients = (recipe) => ingredientsAsArray(recipe).length;

  const recipesToRender = !onlySimple
    ? recipes
    : recipes.filter((recipe) => numberOfIngredients(recipe) < 8);

  return (
    <div className="recipes">
      <button onClick={() => setOnlySimple(!onlySimple)}>
        {onlySimple ? "Show all" : "Show only simple recipes"}
      </button>
      {recipesToRender.map((recipe) => (
        <div className="recipe">
          <h3>
            <a href={recipe.href}>{recipe.title}</a>
          </h3>
          <p>
            Ingredients: {numberOfIngredients(recipe)}. They are{" "}
            {recipe.ingredients}
          </p>
          <img src={recipe.thumbnail} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

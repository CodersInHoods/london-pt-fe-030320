import React from "react";
import RecipeCard from "./RecipeCard";

export const ingredientsAsArray = (recipe) => recipe.ingredients.split(", ");
export const numberOfIngredients = (recipe) =>
  ingredientsAsArray(recipe).length;

const RecipeList = (props) => {
  return (
    <div className="recipeList">
      {props.recipesToRender.map((recipe, i) => (
        <RecipeCard
          key={recipe.id}
          {...recipe}
          deleteRecipe={props.deleteRecipe}
          numberOfIngredients={numberOfIngredients(recipe)}
          toggleShowDetails={(event) => props.toggleShowRecipeDetails(recipe.id)}
        />
      ))}
    </div>
  );
};

export default RecipeList;

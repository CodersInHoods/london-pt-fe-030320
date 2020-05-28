import React, { useState } from "react";

import { initialRecipes } from "./recipeData";

const ingredientsAsArray = (recipe) => recipe.ingredients.split(", ");
const numberOfIngredients = (recipe) => ingredientsAsArray(recipe).length;

class RecipeList extends React.Component {
  state = {
    recipes: initialRecipes,
    onlySimple: false,
  };

  setOnlySimple = (onlySimple) => {
    // this.setState({
    //     onlySimple: onlySimple
    // })
    this.setState({
      onlySimple,
    });
  };

  render() {
    const { onlySimple, recipes } = this.state;
    const { setOnlySimple } = this;

    const recipesToRender = !onlySimple
      ? recipes
      : recipes.filter((recipe) => numberOfIngredients(recipe) < 8);

    return (
      <div className="recipes">
        <button onClick={() => setOnlySimple(!onlySimple)}>
          {onlySimple ? "Show all" : "Show only simple recipes"}
        </button>
        {recipesToRender.map((recipe, i) => (
          <div key={recipe.title} className="recipe">
            <h3>
              <a href={recipe.href}>{recipe.title}</a>
            </h3>
            <button>Show details</button>
            <p>
              Ingredients: {numberOfIngredients(recipe)}. They are{" "}
              {recipe.ingredients}
            </p>
            <img src={recipe.thumbnail} />
          </div>
        ))}
      </div>
    );
  }
}
export default RecipeList;

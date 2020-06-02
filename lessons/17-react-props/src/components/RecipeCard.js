import React from "react";
import { numberOfIngredients } from "./RecipeList";

const RecipeCard = (props) => {

  //   const { recipe } = props;
  const { title, thumbnail, href, ingredients, id, showDetails, toggleShowDetails } = props;

  const handleDeleteClick = () => {
    props.deleteRecipe(id);
  };

  return (
    <div className="recipe">
      <h3>
        <a href={href}>{title}</a> <span onClick={toggleShowDetails}>{showDetails ? "^" : "v"}</span>
      </h3>

      {showDetails && (
        <div>
          <button onClick={handleDeleteClick}>X</button>
          <img alt={title} src={thumbnail} />
          <p>Ingredients: {numberOfIngredients({ ingredients })}.</p>
          <p>{ingredients}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;

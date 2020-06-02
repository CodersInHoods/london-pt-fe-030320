import React, { useState } from "react";
import { numberOfIngredients } from "./RecipeList";

const RecipeCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  //   const { recipe } = props;
  const { title, thumbnail, href, ingredients, id } = props;

  const handleDeleteClick = () => {
    props.deleteRecipe(id);
  };

  const toggleShowDetails = () => setShowDetails(!showDetails);

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

import React from "react";

class RecipeCard extends React.Component {
  state = {
    showDetails: false,
  };

  handleDeleteClick = () => {
    this.props.deleteRecipe(this.props.id);
  };

  setShowDetails = (newShowDetails) =>
    this.setState({
      showDetails: newShowDetails,
    });

  toggleShowDetails = () => this.setShowDetails(!this.state.showDetails);

  render() {
    const { title, thumbnail, href, ingredients, numberOfIngredients } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="recipe">
        <h3>
          <a href={href}>{title}</a>{" "}
          <span onClick={this.toggleShowDetails}>
            {showDetails ? "^" : "v"}
          </span>
        </h3>

        {showDetails && (
          <div>
            <button onClick={this.handleDeleteClick}>X</button>
            <img alt={title} src={thumbnail} />
            <p>Ingredients: {numberOfIngredients}.</p>
            <p>{ingredients}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RecipeCard;

import React, { Component } from "react";
import Recipe from "./Recipe";
import Title from "./Title";

import { recipes } from "./../recipes";
import { RecipeConsumer } from "./../context";

export default class RecipeList extends Component {
  state = { recipes: recipes };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title=" Top Recipes you deserve" />
            <div className="row">
              <RecipeConsumer>
                {recipe => {
                  return recipe.recipes.map(recipe => {
                    return <Recipe key={recipe.id} recipe={recipe} />;
                  });
                }}
              </RecipeConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import { RecipeConsumer } from "./../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Buttons";
import IngredientList from "./../components/ingredients/IngredientList";

class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <RecipeConsumer>
          {value => {
            const {
              id,
              title,
              price,
              src,
              description,
              ingredients,
              inCart
            } = value.recipesStarter;

            return (
              <div className="container py-5">
                {/* Begin Title*/}
                <div className="row">
                  <div className="col-lg-12 mx-auto text-center text-slanted text-orange">
                    <h2>{title}</h2>
                  </div>
                </div>
                {/* End Title*/}

                {/* Begin Recipe*/}
                <div className="row">
                  <div className="col-lg-6 col-md-6  my-5 ">
                    <div className="container">
                      <img src={src} className="img-circle " alt={title} />
                    </div>
                  </div>

                  <div className="col-10 col-md-6 my-5 text-capitalize">
                    <h3> price : {price} </h3>
                    <h3> Description</h3>
                    <p> {description}</p>
                    <h3> Ingredients</h3>
                    <div>
                      <IngredientList ingredients={[...ingredients]} />
                    </div>
                    {/* End Recipe*/}
                    <div className="container p-2">
                      <Link to="/">
                        <ButtonContainer>Back To Recipes</ButtonContainer>
                      </Link>
                      {"      "}
                      <ButtonContainer
                        cart={true}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "Add To Cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </RecipeConsumer>
      </React.Fragment>
    );
  }
}

export default Details;

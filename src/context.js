/* eslint-disable array-callback-return */
import React, { Component } from "react";

import { recipes, recipesStarter } from "./recipes";

const RecipeContext = React.createContext();

class RecipeProvider extends Component {
  state = {
    recipes: [],
    recipesStarter: recipesStarter,
    cart: [],
    cartSubtotal: 0,
    cartTotal: 0,
    cartTax: 0,
    modalOpen: false,
    modalRecipe: recipesStarter,
    ingredients: recipesStarter.ingredients
  };

  componentDidMount() {
    this.setRecipes();
  }

  // copy recipes object to avoid
  // Javascript reference issues
  setRecipes = () => {
    let tempRecipes = [];

    recipes.forEach(recipes => {
      let singleRecipe = { ...recipes };
      tempRecipes = [...tempRecipes, singleRecipe];
    });

    this.setState(() => {
      return { recipes: tempRecipes };
    });
  };

  getItem = id => {
    const recipe = this.state.recipes.find(item => item.id === id);
    return recipe;
  };

  handleDetails = id => {
    const baseRecipe = this.getItem(id);

    this.setState(() => {
      return { recipesStarter: baseRecipe };
    });
  };

  addToCart = id => {
    const tempRecipes = [...this.state.recipes];
    const index = tempRecipes.indexOf(this.getItem(id));
    const recipe = tempRecipes[index];
    recipe.inCart = true;
    recipe.count = 1;
    const price = recipe.price;
    recipe.total = price;

    this.setState(
      () => {
        return { recipes: tempRecipes, cart: [...this.state.cart, recipe] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const recipe = this.getItem(id);
    this.setState(() => {
      return { modalRecipe: recipe, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedRecipe = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedRecipe);

    let recipe = tempCart[index];
    recipe.count = recipe.count + 1;
    recipe.total = recipe.count * recipe.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedRecipe = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedRecipe);
    const recipe = tempCart[index];
    recipe.count = recipe.count - 1;

    if (recipe.count === 0) {
      this.removeItem(id);
    } else {
      recipe.total = recipe.count * recipe.price;

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempRecipes = [...this.state.recipes];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempRecipes.indexOf(this.getItem(id));

    let removedRecipe = tempRecipes[index];
    removedRecipe.inCart = false;
    removedRecipe.count = 0;
    removedRecipe.total = 0;

    this.setState(
      () => {
        return { cart: [...tempCart], recipe: [...tempRecipes] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setRecipes();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
      subTotal += item.total;
      subTotal = +subTotal.toFixed(2);
    });
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = parseFloat(subTotal + tax).toFixed(2);

    this.setState(() => {
      return { cartSubtotal: subTotal, cartTax: tax, cartTotal: total };
    });
  };

  render() {
    return (
      <RecipeContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </RecipeContext.Provider>
    );
  }
}

const RecipeConsumer = RecipeContext.Consumer;

export { RecipeProvider, RecipeConsumer };

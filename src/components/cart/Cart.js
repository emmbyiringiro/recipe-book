import React, { Component } from "react";
import Title from "./../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

import { RecipeConsumer } from "./../../context";

class Cart extends Component {
  render() {
    return (
      <section className="p-5">
        <RecipeConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title title="Your Cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </RecipeConsumer>
      </section>
    );
  }
}

export default Cart;

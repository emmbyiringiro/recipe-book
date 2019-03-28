import React, { Component } from "react";

class EmptyCart extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="col-10 mx-auto text-center text-title">
          <h3> Your Cart is currently empty</h3>
        </div>
      </div>
    );
  }
}

export default EmptyCart;

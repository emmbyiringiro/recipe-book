import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTotal, cartTax, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize content-align-right tex-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </button>
            </Link>

            <h3>
              <span className="text-title">
                subtotal : <strong> $ {cartSubtotal}</strong>
              </span>
            </h3>

            <h3>
              <span className="text-title">
                Tax : <strong> $ {cartTax}</strong>
              </span>
            </h3>
            <h3>
              <span className="text-title">
                Total : <strong> $ {cartTotal}</strong>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

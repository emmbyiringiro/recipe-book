import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ item, value }) {
  const { id, title, src, price, count, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div>
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={src}
            alt={title}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product:</span>
          {title}
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price:</span>
          {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-2">
          <div className="d-flex justify-content-center">
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                increment(id);
              }}
            >
              +
            </span>
          </div>
        </div>

        <div
          className="col-10 mx-auto col-lg-2"
          onClick={() => {
            removeItem(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} className="cart-item" />
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong> Item total : {+total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}

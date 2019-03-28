import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { RecipeConsumer } from "./../context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class Recipe extends Component {
  render() {
    const { id, title, src, price, inCart } = this.props.recipe;
    return (
      <RecipeWrapper className=" col-sm-12 col-md-6 col-lg-4 my-2">
        <div className="card">
          <RecipeConsumer>
            {value => {
              return (
                <div
                  className="img-container p-2"
                  onClick={() => {
                    value.handleDetails(id);
                  }}
                >
                  <Link to="/details">
                    <img src={src} alt={title} className="card-img-top mb-0" />
                  </Link>
                  <button
                    className="cart-btn my-2"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0 "> inCart </p>
                    ) : (
                      <FontAwesomeIcon icon={faCartPlus} />
                    )}
                  </button>
                </div>
              );
            }}
          </RecipeConsumer>
          {/* Card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-capitalize ">{title}</p>
            <h5 className="text-orange  font-italic  mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </RecipeWrapper>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
};

const RecipeWrapper = styled.div`
  .card {
    border-color: transparent;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: var(--mainWhite);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.02);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainOrange);
    border: none;
    color: var(--mainWhite);
    border-radius: 0.5rem 0 0 0;
    font-size: 1.3rem;
    transform: translate(100%, 100%);
    transition: all 0.4s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainYellow);
    cursor: pointer;
  }
`;

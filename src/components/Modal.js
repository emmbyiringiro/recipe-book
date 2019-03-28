import React, { Component } from "react";
import { RecipeConsumer } from "./../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Buttons";
class Modal extends Component {
  render() {
    return (
      <RecipeConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { id, price, src, title, description } = value.modalRecipe;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3"
                    >
                      <h5>Recipe added to cart</h5>
                      <img src={src} alt={title} className="img-fluid" />
                      <h5 className="font-weight-bold">{title}</h5>
                      <h5 className="text-orange font-weight-bold">
                        {" "}
                        price: ${price}
                      </h5>
                      <h6>{description}</h6>

                      <div className="container">
                        <Link to="/">
                          <ButtonContainer
                            onClick={() => {
                              value.closeModal();
                            }}
                          >
                            Continue Shopping
                          </ButtonContainer>
                        </Link>
                        {"  "}
                        <Link to="/cart">
                          <ButtonContainer
                            onClick={() => {
                              value.closeModal();
                            }}
                          >
                            Go To Cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </RecipeConsumer>
    );
  }
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: 0;

  #modal {
    background: var(--mainWhite);
  }
`;

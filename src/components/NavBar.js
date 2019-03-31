import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer, NavWraper } from "./Buttons";

import Logo from "../logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <NavWraper className="navbar nav-expand-sm  px-sm-5">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="navbar-brand img-fluid  "
            type="image/svg+xml"
            width="150"
          />
        </Link>

        <ul className="navbar-nav mx-auto align-items-center px-5">
          <li className="nav-item    text-title">
            <Link to="/" className="nav-link">
              Chef's Favorite Recipes
            </Link>
          </li>
        </ul>

        <Link to="cart" className="ml-auto">
          <ButtonContainer>
            <FontAwesomeIcon icon={faCartPlus} /> Mycart
          </ButtonContainer>
        </Link>
      </NavWraper>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { RecipeProvider } from "./context";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <RecipeProvider>
      <Router>
        <App />
      </Router>
    </RecipeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

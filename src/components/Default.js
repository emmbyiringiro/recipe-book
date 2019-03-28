import React, { Component } from "react";
class Default extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row" />
          <div className="col-10 mx-auto text-title text-capitalize pt-5 ">
            <h1 className="display-3">404</h1>
            <h1> Page not found</h1>
            <h3>
              {" "}
              The page you request URL{" "}
              <span className="text-danger">
                {" "}
                {this.props.location.pathname}{" "}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Default;

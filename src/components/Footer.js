import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FooterWraper } from "./Buttons";

class Footer extends Component {
  render() {
    return (
      <FooterWraper>
        <div className="row">
          <div className="col-10 mx-auto  py-3 text-center ">
            Served with{" "}
            <span className="text-bright">
              <FontAwesomeIcon icon={faHeart} />
            </span>{" "}
            by <span className="text-bright"> Kingsman Recipe</span> .{" "}
            {new Date().getFullYear()} All Right Reserved.
          </div>
        </div>
      </FooterWraper>
    );
  }
}

export default Footer;

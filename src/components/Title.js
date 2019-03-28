import React from "react";

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto  text-center text-title">
        <h3 className="text-uppercase  text-font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Title;

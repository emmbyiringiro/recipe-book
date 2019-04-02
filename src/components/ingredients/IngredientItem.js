import React from "react";
import styled from "styled-components";

export default function IngredientItem({ item }) {
  return (
    <IngredientWraper>
      <div className="row">
        <div className="col-10 mx-2  text-center p-2">
          <span>{item}</span>
        </div>
      </div>
    </IngredientWraper>
  );
}

const IngredientWraper = styled.div`
  background: white;
  border: 0.13rem solid var(--mainWhite);
`;

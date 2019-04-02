import React from "react";

import IngredientItem from "./IngredientItem";

function IngredientList({ ingredients }) {
  const { value } = ingredients;
  return (
    <div className=" my-3">
      {ingredients.map((item, index) => {
        return <IngredientItem item={item} key={index} value={value} />;
      })}
    </div>
  );
}

export default IngredientList;

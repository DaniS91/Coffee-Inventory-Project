import React from "react";
import Coffee from "./Coffee";

function CoffeeList(){
  return (
    <>
    <Coffee 
      name="Bridge Blend"
      roast="Light Roast"
      origin="Indonesia, Africa"
      price="$16.99"
      />
      <Coffee 
      name="Colombia direct trade"
      roast="Medium Roast"
      origin="Colombia"
      price="$19.99"
      />
      </>
  );
}

export default CoffeeList;
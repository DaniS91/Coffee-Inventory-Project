import React from "react";
import Coffee from "./Coffee";


const mainCoffeeList = [
  {
    name: "Bridge Blend",
    roast: "Light Roast",
    origin: "Indonesia, Africa",
    price: "$16.99",
    inventory: "130"
  },
  {
    name: "Colombia direct trade",
    roast: "Medium Roast",
    origin: "Colombia",
    price: "$19.99",
    inventory: "130"
  }
]
function CoffeeList(){
  return (
    <>
    <hr/>
    {mainCoffeeList.map((coffee, index) =>
      <Coffee name={coffee.name}
        origin={coffee.origin}
        roast={coffee.roast}
        price={coffee.price}
        inventory={coffee.inventory}/>
    )}
    </>
  );
}

export default CoffeeList;
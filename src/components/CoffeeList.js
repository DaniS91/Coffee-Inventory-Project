import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


// const mainCoffeeList = [
//   {
//     name: "Bridge Blend",
//     roast: "Light Roast",
//     origin: "Indonesia, Africa",
//     price: "$16.99",
//     inventory: "130"
//   },
//   {
//     name: "Colombia direct trade",
//     roast: "Medium Roast",
//     origin: "Colombia",
//     price: "$19.99",
//     inventory: "130"
//   }
// ]
function CoffeeList(props){
  return (
    <>
    <hr/>
    {props.coffeeList.map((coffee, index) =>
      <Coffee name={coffee.name}
        origin={coffee.origin}
        roast={coffee.roast}
        price={coffee.price}
        inventory={coffee.inventory}/>
    )}
    </>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeList;
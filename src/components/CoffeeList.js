import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

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
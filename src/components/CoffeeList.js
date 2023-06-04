import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  return (
    <>
    <hr/>
    {props.coffeeList.map((coffee, index) =>
      <Coffee 
        whenCoffeeIsClicked = { props.onCoffeeSelection }
        name={coffee.name}
        origin={coffee.origin}
        roast={coffee.roast}
        price={coffee.price}
        inventory={coffee.inventory}
        id={coffee.id}/>
    )}
    </>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;
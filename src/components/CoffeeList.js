import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
  const coffeeListContainerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  return (
    <>
    <h1>Our Coffees</h1>
    <div style={coffeeListContainerStyles}>
    {props.coffeeList.map((coffee) =>
      <Coffee 
        whenCoffeeIsClicked = { props.onCoffeeSelection }
        name={coffee.name}
        origin={coffee.origin}
        roast={coffee.roast}
        price={coffee.price}
        inventory={coffee.inventory}
        id={coffee.id}
        key={coffee.id}/>
    )}
    </div>
    </>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;
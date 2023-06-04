import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props;
  
  return (
    <React.Fragment>
      <h1>{coffee.name}</h1>
      <p>Origin: {coffee.origin}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Price: ${coffee.price} per pound</p>
      <p>Current Inventory: {coffee.inventory} pounds remaining</p>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};


export default CoffeeDetail;
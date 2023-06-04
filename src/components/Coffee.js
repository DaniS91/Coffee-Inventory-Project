import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Origin: {props.origin}</p>
      <p>{props.roast}</p>
      <p>{props.price}</p>
      <p>{props.inventory}</p>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  inventory: PropTypes.string
}

export default Coffee;
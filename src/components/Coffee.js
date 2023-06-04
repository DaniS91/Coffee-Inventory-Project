import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeIsClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.origin} | {props.roast}</p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  inventory: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeIsClicked: PropTypes.func
}

export default Coffee;
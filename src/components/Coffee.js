import React from "react";
import PropTypes from "prop-types";
import './../divhover.css'

function Coffee(props){

  const coffeeDivStyles = {
    border: '2px solid grey',
    borderRadius: '8px',
    width: '350px',
    padding: '5px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const iconStyles = {
    width: '30px',
    margin: '3px'
  }

  const coffeeElementStyles = {
    margin: '8px',
  }
  return (
    <React.Fragment>
      <div id="hoverElement" style={coffeeDivStyles} onClick = {() => props.whenCoffeeIsClicked(props.id)}>
        <img style={iconStyles} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Antu_application-x-javascript.svg/64px-Antu_application-x-javascript.svg.png" alt="coffee bean icon"></img>
        <h3 style={coffeeElementStyles}>{props.name}</h3>
        <p style={coffeeElementStyles}>{props.origin} | {props.roast}</p>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  inventory: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeIsClicked: PropTypes.func
}

export default Coffee;
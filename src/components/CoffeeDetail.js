import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingEdit, onClickingSell } = props;
  const detgailButtonStyles = {
    padding: '5px',
    borderRadius: '5px',
    border: '2px solid grey',
    margin: '5px',
    fontFamily: 'Segoe UI, Ubuntu, Helvetica, sans-serif'
  }
  return (
    <React.Fragment>
      <h1>{coffee.name}</h1>
      <p>Origin: {coffee.origin}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Price: ${coffee.price} per pound</p>
      <p>Current Inventory: {coffee.inventory} pounds remaining</p>
      <button style={detgailButtonStyles} onClick={()=> onClickingSell(coffee.id)}>Sell 1 lb</button>
      <button style={detgailButtonStyles} onClick={ onClickingEdit }>Edit Coffee</button>
      <button style={detgailButtonStyles} onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  inventory: PropTypes.number,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};


export default CoffeeDetail;
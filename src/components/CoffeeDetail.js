import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>{coffee.name}</h1>
      <p>Origin: {coffee.origin}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Price: ${coffee.price} per pound</p>
      <p>Current Inventory: {coffee.inventory} pounds remaining</p>
      <button onClick={()=> onClickingEdit(coffee.id)}>Edit Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};


export default CoffeeDetail;
import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewCoffeeForm(props){

  function handleNewCoffee(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: parseInt(event.target.price.value),
      inventory: 130,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffee}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' />
        <br></br>
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <br></br>
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <br></br>
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;
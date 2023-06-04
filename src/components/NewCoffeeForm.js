import React from "react";

function NewCoffeeForm(props){

  function handleNewCoffee(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.roast.value);
    console.log(event.target.price.value);
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

export default NewCoffeeForm;
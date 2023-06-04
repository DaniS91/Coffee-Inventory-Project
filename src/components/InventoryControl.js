import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  render(){

    let currentState = null;
    if (this.state.formVisible) {
      currentState = <NewCoffeeForm />
    } else {
      currentState = <CoffeeList />
    }
    return (
      <React.Fragment>
        {currentState}
      </React.Fragment>
    );
  }

}

export default InventoryControl;
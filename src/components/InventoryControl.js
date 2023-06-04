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

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render(){

    let currentState = null;
    let buttonText = null;

    if (this.state.formVisible) {
      currentState = <NewCoffeeForm />;
      buttonText = "Back to Coffee List"
    } else {
      currentState = <CoffeeList />
      buttonText = "Add New Coffee"
    }
    return (
      <React.Fragment>
        {currentState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default InventoryControl;
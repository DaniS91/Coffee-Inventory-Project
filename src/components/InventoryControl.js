import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainCoffeeList: [
        {
          name: "Bridge Blend",
          roast: "Light Roast",
          origin: "Indonesia, Africa",
          price: "$16.99",
          inventory: "130"
        },
        {
          name: "Colombia direct trade",
          roast: "Medium Roast",
          origin: "Colombia",
          price: "$19.99",
          inventory: "130"
        }
      ]
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
      currentState = <CoffeeList coffeeList={this.state.mainCoffeeList} />
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
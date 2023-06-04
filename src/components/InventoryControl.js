import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail'

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainCoffeeList: [],
      selectedCoffee: null
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisible: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleAddingNewCoffee = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);

    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisible: false
    });
  }

  handleSelectingCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    
    this.setState({
      selectedCoffee: selectedCoffee
    });
  }

  render(){

    let currentState = null;
    let buttonText = null;

    if (this.state.selectedCoffee != null) {
      currentState = <CoffeeDetail coffee = {this.state.selectedCoffee} />
      buttonText = "Back to Coffee List";
    } else if (this.state.formVisible) {
      currentState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffee}/>;
      buttonText = "Back to Coffee List";
    } else {
      currentState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleSelectingCoffee}/>
      buttonText = "Add New Coffee";
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
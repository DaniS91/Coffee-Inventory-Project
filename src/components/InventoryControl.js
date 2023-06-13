import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail'
import EditCoffeeForm from "./EditCoffeeForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false,
      coffeeToBeSold: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisible: false,
        selectedCoffee: null,
        editing: false,
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
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

  handleEditingCoffee = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
                                     .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
                                     .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !==id);

    this.setState ({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleSellingCoffee = (id) => {
    const coffeeToBeSold = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    if (coffeeToBeSold.inventory <= 0) {
      let newCoffeeInventory = 0;
      coffeeToBeSold.inventory = newCoffeeInventory;
    } else {
      let newCoffeeInventory = coffeeToBeSold.inventory -1;
      coffeeToBeSold.inventory = newCoffeeInventory;
    }
    const updatedMainCoffeeList = this.state.mainCoffeeList
                                     .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
                                     .concat(coffeeToBeSold);
    this.setState({
      mainCoffeeList: updatedMainCoffeeList
    });
  }

  render() {

    let currentState = null;
    let buttonText = null;

    const mainButtonStyles = {
      padding: '5px',
      borderRadius: '5px',
      border: '2px solid grey',
      fontFamily: 'Segoe UI, Ubuntu, Helvetica, sans-serif'
    }
    const mainDivStyles= {
      margin: '10px',
      textAlign: 'center'
    }

    if (this.state.editing) {
      currentState = 
      <EditCoffeeForm 
        coffee = {this.state.selectedCoffee}
        onEditCoffee = {this.handleEditingCoffee} />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentState = 
      <CoffeeDetail 
        coffee = {this.state.selectedCoffee}
        inventory = {this.state.inventory}
        onClickingSell = {this.handleSellingCoffee}
        onClickingDelete = {this.handleDeletingCoffee}
        onClickingEdit = {this.handleEditClick} />
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
        <div style={mainDivStyles}>
        {currentState}
        <button style={mainButtonStyles} onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  };
}

export default InventoryControl;
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
      editing: false
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

  handleEditClick = () => {
    console.log("handleditclick reached");
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
      selectedCofee: null
    });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !==id);

    this.setState ({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  render(){

    let currentState = null;
    let buttonText = null;

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
        {currentState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default InventoryControl;
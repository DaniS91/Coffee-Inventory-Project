import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: parseInt(event.target.price.value),
      id: coffee.id
    });
  }
  return (
    <>
      <ReusableForm
        buttonText="Update Coffee" 
        formSubmissionHandler={handleEditFormSubmission}/>
    </>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
}

export default EditCoffeeForm;
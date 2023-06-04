import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  return (
    <>
      <ReusableForm
        buttonText="Update Coffee" />
    </>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
}

export default EditCoffeeForm;
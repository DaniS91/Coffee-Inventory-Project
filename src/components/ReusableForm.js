import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
          type='string'
          name='price'
          placeholder='Price' />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
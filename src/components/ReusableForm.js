import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  const inputStyles = {
    width: '30vh',
    padding: '5px',
    margin: '5px',
    boxSizing: 'border-box',
    border: '2px solid grey'
  }

  const inputDivStyles = {
    margin: '5px',
    textAlign: 'center'
  }

  const submitButtonStyles = {
    padding: '5px',
    borderRadius: '5px',
    border: '2px solid grey',
    fontFamily: 'Segoe UI, Ubuntu, Helvetica, sans-serif'
  }
  return (
    <React.Fragment>
      <div style={inputDivStyles}>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='Coffee Name'
          style={inputStyles} />
        <br></br>
        <input
          type='text'
          name='origin'
          placeholder='Origin' 
          style={inputStyles} />
        <br></br>
        <input
          type='text'
          name='roast'
          placeholder='Roast' 
          style={inputStyles} />
        <br></br>
        <input
          type='string'
          name='price'
          placeholder='Price' 
          style={inputStyles} />
        <br></br>
        <button type='submit' style={submitButtonStyles}>Submit</button>
      </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
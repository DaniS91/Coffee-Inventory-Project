import React from "react";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Origin: {props.origin}</p>
      <p>{props.roast}</p>
      <p>{props.price}</p>
      <hr/>
    </React.Fragment>
  );
}

export default Coffee;
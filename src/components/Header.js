import React from "react";
import coffeePic from './../img/tina-guina-unsplash.jpg'

function Header(){
  const headerStyles = {
    backgroundImage: `url(${coffeePic})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '14vh',
    // width: '100vw',
    textAlign: 'center',
    padding: '25px'
  }

  const h1Styles = {
    height: '9vh',
    color: 'white',
    width: '100vw',
    padding: '5px'
  }


  return (
    <div style={headerStyles}>
      <h1 style={h1Styles}>Sweet Beans Coffee Roasters</h1>
    </div>
  );
}

export default Header;
import React from 'react';


export class Header extends React.Component {
  render(){
    return(
      <div className = "headercontainer">
        <h1 className = "header">JLPT Kanji Study</h1>

        <p className="app-description">-a simple study app-</p>

      </div>

    );
  }
}

export default Header;

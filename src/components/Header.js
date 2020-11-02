import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header text-center">
        <h1 className="h1">Employee Directory</h1>
        <p>Type in an employee name to filter search results or click name/dob to sort employees</p>
      </div>
    )
  }

export default Header;
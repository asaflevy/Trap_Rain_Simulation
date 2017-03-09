import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
const Header = () => {
  return (

    <nav className="navbar navbar-toggleable-md navbar-inverse">
      <a className="navbar-brand" href="#">Rain</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/" activeClassName="active ">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" activeClassName="active">About</Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};



export default Header;

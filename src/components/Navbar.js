import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="deep-purple lighten-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">  &nbsp;&nbsp;S C A L E &spades; G E N </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/" exact="true">Home</Link></li>
          <li><Link to="/generator" exact="true">Generator</Link></li>
          <li><Link to="/random" exact="true">Random</Link></li>
          <li><Link to="/about" exact="true">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
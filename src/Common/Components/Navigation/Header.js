import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
      <header className="header">
        {props.children[0]}
        <h1>Header Component</h1>
        {props.children.map((value, index) => {
  if (index !== 0) {
    return value;
  }
})}
      </header>
    );
};

export default Header;
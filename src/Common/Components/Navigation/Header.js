import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      {props.children[0]}
      <h1>Header Component</h1>
      {props.children.slice(1)}
    </header>
  );
};

export default Header;

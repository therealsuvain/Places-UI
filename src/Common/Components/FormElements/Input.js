import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className={`form ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} />
    </div>
  );
};

export default Input;

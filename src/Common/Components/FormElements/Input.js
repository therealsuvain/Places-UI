import React, { useEffect, useReducer } from "react";
import "./Input.css";
import { validate } from "../../Util/Validation";

const inputStateHandler = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [formState, dispatch] = useReducer(inputStateHandler, {
    value: "",
    isTouched: false,
    isValid: false,
  });
  const { value, isValid } = formState;
  const { id, onInput } = props;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [isValid, value, onInput]);
  const changeHandler = (event) => {
    event.preventDefault();
    console.log("Change");
    console.log(event.target.value);
    dispatch({
      type: "INPUT_CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const blurHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  return (
    <div
      className={`form ${
        !formState.isValid && formState.isTouched && "invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={formState.value}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default Input;

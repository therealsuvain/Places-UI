import React from "react";
import { useReducer } from "react";
import { validate } from "../Util/Validation";
const stateHandler = (state, action) => {
  console.log("form hook");
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const input in state) {
        if (input === action.id) {
          console.log("action");
          formIsValid = formIsValid && action.isValid;
        } else {
          console.log("state");
          console.log(state);
          // formIsValid = formIsValid && state[input].isValid;
        }
      }
      return {
        ...state,
        isFormValid: formIsValid,
      };
    default:
      return state;
  }
};

const useForm = () => {
  const [formState, dispatch] = useReducer(stateHandler, {
    inputs: {
      title: {
        value: "",
        isTouched: false,
        isValid: false,
      },
      url: {
        value: "",
        isTouched: false,
        isValid: false,
      },
    },
    isFormValid: false,
  });
  return { formState, dispatch };
};

export default useForm;

import React from "react";
import { useReducer } from "react";

const stateHandler = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

const useForm = () => {
  const [formState, dispatch] = useReducer(stateHandler);
  return { fromState, dispatch };
};

export default useForm;

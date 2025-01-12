import React, { useCallback } from "react";

import "./NewPlace.css";
import Button from "../../Common/Components/FormElements/Button";
import Input from "../../Common/Components/FormElements/Input";
import {
  VALIDATION_TYPE_MAXLENGTH,
  VALIDATION_TYPE_MINLENGTH,
  VALIDATION_TYPE_REQUIRE,
} from "../../Common/Util/Validation";
import useForm from "../../Common/Hooks/Form-Hook";

const NewPlace = () => {
  const { formState, dispatch } = useForm();
  const inputHandler = useCallback(
    (id, value, isValid) => {
      console.log("Input Handler");
      console.log(id, value, isValid);
      dispatch({
        type: "INPUT_CHANGE",
        id: id,
        value: value,
        isValid: isValid,
      });
    },
    [dispatch]
  );
  return (
    <form className="place-form">
      <Input
        label="Input"
        validators={[
          VALIDATION_TYPE_MAXLENGTH(10),
          VALIDATION_TYPE_MINLENGTH(5),
          VALIDATION_TYPE_REQUIRE,
        ]}
        id="title"
        onInput={inputHandler}
      ></Input>
      <Input
        label="Paste URL"
        validators={[
          VALIDATION_TYPE_MAXLENGTH(10),
          VALIDATION_TYPE_MINLENGTH(5),
        ]}
        id="url"
        onInput={inputHandler}
      ></Input>
      <Button
        type="submit"
        disabled={!formState.isFormValid}
        className="button--submit"
      >
        Submit
      </Button>
      <Button to="/new-page" className="button--link">
        Go to New Page
      </Button>
      <Button className="button--friend-request">Send Friend Request</Button>
    </form>
  );
};

export default NewPlace;

import React from "react";

import "./NewPlace.css";
import Button from "../../Common/Components/FormElements/Button";
import Input from "../../Common/Components/FormElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input label="Input"></Input>
      <Button type="submit" className="button--submit">
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

import React from "react";
import "./UserProfilePanel.css";

const UserProfilePanel = (props) => {
  return (
    <div className="user-profile-panel">
      <div className="user-profile-panel__image">
        <img src={props.userInfo.image} alt={props.userInfo.name} />
      </div>
      <div className="user-profile-panel__info">
        <h2>{props.userInfo.name}</h2>
        <h3>
          {props.userInfo.places}{" "}
          {props.userInfo.places === 1 ? "Place" : "Places"}
        </h3>
      </div>
    </div>
  );
};

export default UserProfilePanel;

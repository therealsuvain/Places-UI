import React, { useState } from "react";
import "./UserItem.css";
import RippleCard from "../../Common/Components/UI/RippleCard";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const logger = () => {
    console.log(`/${props.id}/places`);
  };

  return (
    <RippleCard>
      <Link to={`/${props.id}/places`}>
        <div className="user-item-border+image">
          <div className="border">
            <img
              src={process.env.PUBLIC_URL + "/rainbow border.png"}
              alt="Rainbow Border"
              className="border-image"
            />
          </div>
          <div className="user-item-image">
            <img src={props.image} alt={props.name} className="user-image" />
          </div>
        </div>
        <div className="user-item-info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </Link>
    </RippleCard>
  );
};

export default UserItem;

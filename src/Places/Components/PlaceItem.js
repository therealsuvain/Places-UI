import React from "react";

const PlaceItem = (props) => {
  return (
    <div>
      <div className="place">
        <h2 className="place__title">{props.title}</h2>
        <img className="place__image" src={props.image} alt={props.title} />
        <div className="place__map">{props.location.lat}</div>
      </div>
    </div>
  );
};

export default PlaceItem;

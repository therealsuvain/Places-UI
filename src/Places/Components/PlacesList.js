import React from "react";
import "./PlaceItem.css";
import PlaceItem from "./PlaceItem";

const PlacesList = (props) => {
  return (
    <div className="places-list">
      <ul style={{ listStyle: "none" }}>
        {props.places.map((place) => (
          <li key={place.id}>
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.imageUrl}
              title={place.place}
              creator={place.creator}
              location={place.location}
            ></PlaceItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesList;

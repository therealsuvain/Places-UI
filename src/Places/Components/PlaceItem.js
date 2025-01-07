import React from "react";
import OpenMap from "../../Common/Components/UI/OpenMap";
import { Map, APIProvider } from "@vis.gl/react-google-maps";
const PlaceItem = (props) => {
  return (
    <div className="place">
      <h2 className="place__title">{props.title}</h2>
      <div className="place__map_and_image">
        <img className="place__image" src={props.image} alt={props.title}></img>
        <div className="place__map">
          <APIProvider apiKey="AIzaSyADZEuAtBCcIMxJrZc3S4VdmmfVu36xMhw">
            <OpenMap location={props.location} />
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;

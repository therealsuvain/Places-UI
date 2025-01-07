import React from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import "./OpenMap.css";

const OpenMap = (props) => {
  const containerStyle = {
    display: "flex",
    border: "1px solid grey",
    borderRadius: "50%",
  };

  const center = {
    lat: props.location.lat,
    lng: props.location.long,
  };
  return (
    <div className="open-map">
      <Map
        defaultZoom={13}
        defaultCenter={center}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker
          position={{ lat: props.location.lat, lng: props.location.long }}
        ></Marker>
      </Map>
    </div>
  );
};

export default OpenMap;

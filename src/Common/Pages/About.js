import React from "react";
import "./About.css";
import RippleCard from "../Components/UI/RippleCard";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__heading"></h1>
      <div className="about__grid-container">
        <div className="grid-item">
          <label>Ripple:Hover</label>
          <RippleCard></RippleCard>
        </div>
        <div className="grid-item spinner">
          <label>Spinner:Hover</label>
        </div>
        <div className="grid-item">
          <label>Item 3</label>
        </div>
        <div className="grid-item">
          <label>Item 4</label>
        </div>
        <div className="grid-item">
          <label>Item 5</label>
        </div>
        <div className="grid-item">
          <label>Item 6</label>
        </div>
        <div className="grid-item">
          <label>Item 7</label>
        </div>
        <div className="grid-item">
          <label>Item 8</label>
        </div>
        <div className="grid-item">
          <label>Item 9</label>
        </div>
      </div>
    </div>
  );
};

export default About;

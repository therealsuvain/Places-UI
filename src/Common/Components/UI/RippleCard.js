import React from 'react';
import './RippleCard.css';
import { useState } from 'react';

const RippleCard = (props) => {
    const [ripples, setRipples] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = (event) => {
    const rect = event.target.getBoundingClientRect();
    const rippleSize = Math.max(rect.width, rect.height);
    const newRipple = {
      top: event.clientY - rect.top - rippleSize / 2,
      left: event.clientX - rect.left - rippleSize / 2,
      width: rippleSize,
      height: rippleSize,
    };
    setRipples([...ripples, newRipple]);
    setTimeout(() => {
      setRipples(ripples.slice(1)); // Remove the ripple after animation
    }, 600);
    setIsSelected(true); // Set the selected state on mouse enter 
    }; 
    const handleMouseLeave = () => {
       setIsSelected(false); // Remove the selected state on mouse leave 
    };

    return (
        <div className={`user-item ${isSelected ? 'selected' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="ripple"
          style={{
            top: ripple.top,
            left: ripple.left,
            width: ripple.width,
            height: ripple.height,
          }}
        ></span>
      ))}
      {props.children}
        </div>
    );
};

export default RippleCard;
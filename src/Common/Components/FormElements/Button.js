import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Button.css";

const Button = (props) => {
  const {
    type,
    onClick,
    href,
    to,
    exact,
    children,
    disabled,
    className,
    style,
  } = props;

  const variants = {
    submit: {
      hover: { scale: 1.1, backgroundColor: "#218838" },
      tap: { scale: 0.9 },
    },
    link: {
      hover: { scale: 1.1, backgroundColor: "#138496" },
      tap: { scale: 0.9 },
    },
    friendRequest: {
      hover: { scale: 1.1, backgroundColor: "#e0a800" },
      tap: { scale: 0.9 },
    },
    default: {
      hover: { scale: 1.1, backgroundColor: "#357ab8" },
      tap: { scale: 0.9 },
    },
  };

  const getVariant = () => {
    if (className.includes("button--submit")) return "submit";
    if (className.includes("button--link")) return "link";
    if (className.includes("button--friend-request")) return "friendRequest";
    return "default";
  };

  const variant = getVariant();

  if (href) {
    return (
      <motion.a
        className={`button ${className}`}
        href={href}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        whileTap="tap"
        variants={variants[variant]}
      >
        {children}
      </motion.a>
    );
  }

  if (to) {
    return (
      <motion.div
        className={`button ${className}`}
        style={style}
        whileHover="hover"
        whileTap="tap"
        variants={variants[variant]}
      >
        <Link to={to} exact={exact}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      whileHover="hover"
      whileTap="tap"
      variants={variants[variant]}
    >
      {children}
    </motion.button>
  );
};

export default Button;

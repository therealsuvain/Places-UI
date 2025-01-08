import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { motion } from "framer-motion";

const NavLinks = () => {
  const variants = {
    hover: {
      backgroundColor: "#4a90e2",
      scale: 1.2,
      transition: { duration: 0.25 },
    },
  };
  return (
    <motion.ul className="nav-links">
      <motion.li variants={variants} whileHover="hover">
        <NavLink to="/" exact>
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={variants} whileHover="hover">
        <NavLink to="/places/new">Place</NavLink>
      </motion.li>
      <motion.li variants={variants} whileHover="hover">
        <NavLink to="/about">About</NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavLinks;

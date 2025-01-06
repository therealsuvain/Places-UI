import React from "react";
import "./SideDrawer.css";
import { AnimatePresence, motion } from "framer-motion";

const SideD = (props) => {
  return (
    <motion.aside
      initial="initialState"
      animate="animateState"
      exit="exitState"
      variants={{
        initialState: {
          x: "-100%",
        },
        animateState: {
          x: 400,
          transition: { type: "linear", duration: 0.5 },
        },
        exitState: {
          x: "-100%",
          transition: { type: "linear", duration: 0.5 },
        },
      }}
      className="side-drawer"
      onClick={props.onClick}
    >
      {props.children}
    </motion.aside>
  );
};

export default SideD;

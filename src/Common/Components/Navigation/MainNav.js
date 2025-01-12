import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./MainNav.css";
import Header from "./Header";
import NavLinks from "./NavLinks";
import SideD from "./SideDrawer";
import BackDrop from "../UI/BackDrop";

const MainNav = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsSideDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsSideDrawerOpen(false);
  };

  return (
    <React.Fragment>
      {isSideDrawerOpen && <BackDrop onClick={closeDrawer} />}
      <AnimatePresence>
        {isSideDrawerOpen && (
          <SideD onClick={closeDrawer}>
            <NavLinks />
          </SideD>
        )}
      </AnimatePresence>
      <Header>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <nav className="main-navigation__links">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNav;

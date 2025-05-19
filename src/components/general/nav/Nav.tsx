"use client";
import React, { useState } from "react";
import Logo from "../logo/Logo";
import classes from "./Nav.module.scss";
import Sidebar from "./SideBar/Sidebar";

const Nav = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <div className={classes.nav}>
      <div className={classes.nav_container}>
        <Logo />

        <div onClick={() => setShowSidebar(!showSideBar)}>
          <span
            className={`${classes.nav_menu__burger} ${
              showSideBar ? classes.open : ""
            }`}
          ></span>
        </div>
      </div>
      {showSideBar && <Sidebar showSideBar={showSideBar}/>}
    </div>
  );
};

export default Nav;

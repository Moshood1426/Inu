"use client";
import React, { useState } from "react";
import Logo from "../logo/Logo";
import classes from "./Nav.module.scss";

const Nav = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <div className={classes.nav}>
      <div className={classes.nav_container}>
        <Logo />

        <div>
          <span
            className={`${classes.nav_menu__burger} ${
              showSideBar ? classes.open : ""
            }`}
            onClick={() => setShowSidebar(!showSideBar)}
          ></span>
        </div>

        
      </div>
    </div>
  );
};

export default Nav;

import React from 'react';
import classes from "./SideBar.module.scss";
import Socials from '../../socials/Socials';

const Sidebar = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>

      <Socials />
    </div>
  )
}

export default Sidebar

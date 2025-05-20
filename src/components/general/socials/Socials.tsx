import React from "react";
import classes from "./Socials.module.scss";
import { BiLogoGmail, BiLogoTwitter } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import Logo from "../logo/Logo";
import { GoArrowUpRight } from "react-icons/go";

const Socials = () => {
  return (
    <div className={classes.socials}>
      <div className={classes.socials_brand}>
        
        <div className={classes.socials_brand_logo}>
          <Logo />
          <small>connect with us today</small>
        </div>
      </div>
      <ul className={classes.socials_list}>
        <li className={classes.socials_list_item}>
          <BiLogoTwitter className={classes.socials_icon} />
          <span className={classes.socials_name}>Twitter</span>
          <GoArrowUpRight className={classes.socials_arrow} />
        </li>
        <li className={classes.socials_list_item}>
          <FaFacebook className={classes.socials_icon} />
          <span className={classes.socials_name}>Facebook</span>
          <GoArrowUpRight className={classes.socials_arrow} />
        </li>
        <li className={classes.socials_list_item}>
          <BiLogoGmail className={classes.socials_icon} />
          <span className={classes.socials_name}>Gmail</span>
          <GoArrowUpRight className={classes.socials_arrow} />
        </li>
      </ul>
      <span className={classes.socials_text}>Connect with us today</span>
    </div>
  );
};

export default Socials;

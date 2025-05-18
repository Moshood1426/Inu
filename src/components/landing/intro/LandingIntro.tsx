"use client";
import Image from "next/image";
import React, { useState } from "react";
import introIcon from "@/assets/images/office-building.png";
import classes from "./LandingIntro.module.scss";
import { IoCaretForwardOutline } from "react-icons/io5";
import Link from "next/link";
import Socials from "@/components/general/socials/Socials";
import Nav from "@/components/general/nav/Nav";

const LandingIntro = () => {
  const [activeLink] = useState("projects");

  return (
    <div className={classes.intro}>
      <div className={classes.intro_container}>
        <div className={`${classes.intro_item} ${classes.intro_item_nav}`}>
          <Nav />
        </div>

        <div className={`${classes.intro_item} ${classes.intro_item_content}`}>
          <Image
            src={introIcon}
            width={"100"}
            height={"100"}
            alt=""
            className={classes.intro_item_img}
          />
          <div>
            <h2>Lorem Ipsum gsa dolor sit amet, conse</h2>
            <p className={classes.intro_item_content_text}>
              quis dnostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit ess. exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit ess
            </p>
          </div>

          <Link href={"/articles"} className={`btn ${classes.intro_btn}`}>
            Explore <IoCaretForwardOutline />
          </Link>
        </div>

        <div className={`${classes.intro_item} ${classes.intro_bignav}`}>
          <ul className={classes.intro_bignav_list}>
            <li>
              <small
                className={`${classes.intro_bignav_list_item} ${
                  activeLink === "projects"
                    ? classes.intro_bignav_list_item_active
                    : ""
                }`}
              >
                <span>00</span>
                <Link href="/" className={classes.intro_bignav_list_link}>
                  Projects
                </Link>
              </small>
            </li>
            <li>
              <small className={classes.intro_bignav_list_item}>
                <span>01</span>
                <Link
                  href="/articles"
                  className={classes.intro_bignav_list_link}
                >
                  Articles
                </Link>
              </small>
            </li>
            <li>
              <small className={classes.intro_bignav_list_item}>
                <span>02</span>
                <Link href="/about" className={classes.intro_bignav_list_link}>
                  About Us
                </Link>
              </small>
            </li>
            <li>
              <small className={classes.intro_bignav_list_item}>
                <span>03</span>
                <Link
                  href="/contact"
                  className={classes.intro_bignav_list_link}
                >
                  Contact Us
                </Link>
              </small>
            </li>
          </ul>
        </div>

        <div className={classes.intro_item}>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default LandingIntro;

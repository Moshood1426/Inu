"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import introIcon from "@/assets/images/office-building.png";
import classes from "./LandingIntro.module.scss";
import { IoCaretForwardOutline } from "react-icons/io5";
import Link from "next/link";
import Socials from "@/components/general/socials/Socials";
import Nav from "@/components/general/nav/Nav";
import { usePathname } from "next/navigation";

const LandingIntro = () => {
  const [activeLink, setActiveLink] = useState("projects");

  const pathname = usePathname();

  useEffect(() => {
    const cleanPath = pathname.slice(1);
    if (!cleanPath || cleanPath === "projects") {
      setActiveLink("projects");
    } else if (cleanPath === "articles") {
      setActiveLink("articles");
    }
  }, [pathname]);

  const updateLink = (arg: string) => {
    if (activeLink !== arg) {
      setActiveLink(arg);
    }
  };

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
              voluptate velit ess.
            </p>
          </div>

          <Link href={"/projects"} className={`btn ${classes.intro_btn}`}>
            Explore <IoCaretForwardOutline />
          </Link>
        </div>

        <div className={`${classes.intro_item} ${classes.intro_bignav}`}>
          <ul className={classes.intro_bignav_list}>
            <Link href={"/projects"}>
              <li onClick={() => updateLink("projects")}>
                <small
                  className={`${classes.intro_bignav_list_item} ${
                    activeLink === "projects"
                      ? classes.intro_bignav_list_item_active
                      : ""
                  }`}
                >
                  <span>00</span>
                  <span
                    className={`${classes.intro_bignav_list_link} ${
                      activeLink === "projects" && classes.active
                    }`}
                  >
                    Projects
                  </span>
                </small>
              </li>
            </Link>
            <Link href={"/articles"}>
              <li onClick={() => updateLink("articles")}>
                <small
                  className={`${classes.intro_bignav_list_item} ${
                    activeLink === "articles"
                      ? classes.intro_bignav_list_item_active
                      : ""
                  }`}
                >
                  <span>01</span>
                  <span
                    className={`${classes.intro_bignav_list_link} ${
                      activeLink === "articles" && classes.active
                    }`}
                  >
                    Articles
                  </span>
                </small>
              </li>
            </Link>
            <Link href={"/about"}>
              <li onClick={() => updateLink("about")}>
                <small
                  className={`${classes.intro_bignav_list_item} ${
                    activeLink === "about"
                      ? classes.intro_bignav_list_item_active
                      : ""
                  }`}
                >
                  <span>02</span>
                  <span
                    className={`${classes.intro_bignav_list_link} ${
                      activeLink === "about" && classes.active
                    }`}
                  >
                    About us
                  </span>
                </small>
              </li>
            </Link>
            <Link href={"/contact"}>
              <li onClick={() => updateLink("contact")}>
                <small
                  className={`${classes.intro_bignav_list_item} ${
                    activeLink === "contact"
                      ? classes.intro_bignav_list_item_active
                      : ""
                  }`}
                >
                  <span>03</span>
                  <span
                    className={`${classes.intro_bignav_list_link} ${
                      activeLink === "contact" && classes.active
                    }`}
                  >
                    Contact Us
                  </span>
                </small>
              </li>
            </Link>
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

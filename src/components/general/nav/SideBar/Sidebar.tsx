"use client";
import React, { useEffect, useState } from "react";
import classes from "./SideBar.module.scss";
import Socials from "../../socials/Socials";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const cleanPath = pathname.slice(1);
    setActiveLink(cleanPath);
  }, [pathname]);

  return (
    <div className={classes.nav}>
      <div className={classes.nav_container}>
        <ul className={classes.nav_list}>
          <Link href={"/"}>
            {" "}
            <li className={`${activeLink === "" && classes.nav_active}`}>
              Home
            </li>
          </Link>
          <Link href={"/projects"}>
            <li
              className={`${activeLink === "projects" && classes.nav_active}`}
            >
              Projects
            </li>
          </Link>
          <Link href={"/articles"}>
            <li
              className={`${activeLink === "articles" && classes.nav_active}`}
            >
              Articles
            </li>
          </Link>
          <Link href={"/about"}>
            {" "}
            <li className={`${activeLink === "about" && classes.nav_active}`}>
              About
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className={`${activeLink === "contact" && classes.nav_active}`}>
              Contact Us
            </li>
          </Link>
        </ul>
        <div className={classes.nav_socials}>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

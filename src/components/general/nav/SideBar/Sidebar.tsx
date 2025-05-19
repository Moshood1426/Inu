"use client";
import React, { useEffect, useState, useRef } from "react";
import classes from "./SideBar.module.scss";
import Socials from "../../socials/Socials";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const pathname = usePathname();
  const contentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const listItems = Array.from(contentRef.current.children);
      gsap.fromTo(
        listItems,
        {
          opacity: 0,
          y: 10, // slight vertical offset
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3, // fast
          stagger: 0.05, // rapid sequence
          ease: "power1.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    const cleanPath = pathname.slice(1);
    setActiveLink(cleanPath);
  }, [pathname]);

  return (
    <div className={classes.nav}>
      <div className={classes.nav_container}>
        <ul className={classes.nav_list} ref={contentRef}>
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

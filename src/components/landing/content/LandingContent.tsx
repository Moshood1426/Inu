"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import classes from "./LandingContent.module.scss";
import LandingIntro from "../intro/LandingIntro";
import Articles from "@/components/articles/Articles";
import Projects from "@/components/projects/Projects";

const LandingContent = () => {
  const [currentPath, setCurrentPath] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const cleanPath = pathname.slice(1);
    setCurrentPath(cleanPath);
    console.log(pathname);
  }, [pathname]);

  return (
    <div className={classes.landing}>
      <div className={classes.landing_container}>
        <div className={classes.landing_container_item}>
          <LandingIntro />
        </div>
        <div
          className={`${classes.landing_container_item} ${classes.landing_articles}`}
        >
          {currentPath === "projects" || !currentPath ? (
            <Projects />
          ) : (
            <Articles />
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingContent;

import React from "react";
import classes from "./LandingContent.module.scss";
import LandingIntro from "../intro/LandingIntro";
import Articles from "@/components/articles/Articles";

const LandingContent = () => {
    
  return (
    <div className={classes.landing}>
      <div className={classes.landing_container}>
        <div className={classes.landing_container_item}>
          <LandingIntro />
        </div>
        <div
          className={`${classes.landing_container_item} ${classes.landing_articles}`}
        >
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default LandingContent;

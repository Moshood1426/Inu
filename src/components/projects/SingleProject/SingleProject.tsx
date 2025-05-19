import React from "react";
import classes from "./SingleProject.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const SingleProject: React.FC<{
  id: number;
  details: string;
  creator: string;
  title: string;
}> = ({ title, creator, details }) => {
  return (
    <div className={classes.project}>
      <div className={classes.project_title}>
        <h5>{title}</h5>
        <small className={classes.project_creator}>created by: {creator}</small>
      </div>
      <div className={classes.project_footer}>
        <p>{details}</p>
      </div>

      <span>
        Explore <GoArrowUpRight className={classes.project_arrow} />
      </span>
    </div>
  );
};

export default SingleProject;

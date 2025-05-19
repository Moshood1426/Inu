import React from "react";
import classes from "./SingleProject.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const SingleProject: React.FC<{
  id: number;
  index: number;
  details: string;
  creator: string;
  title: string;
}> = ({ title, index, creator, details }) => {
  return (
    <div
      className={`${classes.project} ${
        index % 2 === 1 && classes.project_indent
      }`}
    >
      <div className={classes.project_title}>
        <h5>{title}</h5>
        <small className={classes.project_creator}>created by: {creator}</small>
      </div>
      <div className={classes.project_footer}>
        <p>{details}</p>
      </div>

      <span className={classes.project_explore}>
        Explore
        <GoArrowUpRight className={classes.project_arrow} />
      </span>
    </div>
  );
};

export default SingleProject;

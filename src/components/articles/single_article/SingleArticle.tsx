import React from "react";
import classes from "./SingleArticle.module.scss";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const SingleArticle: React.FC<{
  id: number;
  category: string;
  date: string;
  title: string;
  time: string;
}> = ({ category, date, title, time }) => {
  return (
    <div className={classes.article}>
      <div className={classes.article_container}>
        <div className={classes.article_intro}>
          <small className={classes.article_intro_category}>{category}</small>
          <small className={classes.article_intro_date}>
            <SlCalender />
            {date}
          </small>
        </div>
        <div className={classes.article_details}>
          <h5>{title}</h5>
          <small>
            <IoMdTime />
            {time}
          </small>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;

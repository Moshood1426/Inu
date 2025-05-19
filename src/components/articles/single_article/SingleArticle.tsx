"use client";
import React, { useEffect, useRef } from "react";
import classes from "./SingleArticle.module.scss";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const SingleArticle: React.FC<{
  id: number;
  category: string;
  index: number;
  date: string;
  title: string;
  time: string;
}> = ({ category, index, date, title, time }) => {
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!gradientRef.current) return;

      const { clientX, clientY } = event;
      const rect = gradientRef.current.getBoundingClientRect();

      const isInsideContainer =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      if (isInsideContainer) {
        const posX = ((clientX - rect.left) / rect.width) * 100;
        const posY = ((clientY - rect.top) / rect.height) * 100;

        // Light gradient for white theme
        const gradientValue = `radial-gradient(91.76% 217.86% at ${posX + 5}% ${
          posY + 5
        }%, rgba(255, 255, 255, 0.6) 0%, rgba(240, 240, 240, 0.85) 34.5%)`;

        gradientRef.current.style.background = gradientValue;
      } else {
        // Clear gradient when mouse leaves
        gradientRef.current.style.background = "none";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`${classes.article} ${
        index % 2 === 1 && classes.article_indent
      }`}
    >
      <div className={classes.article_container}>
        <div className={classes.article_overlay} ref={gradientRef}></div>
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

"use client";
import React, { useRef, useEffect } from "react";
import classes from "./SingleProject.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const SingleProject: React.FC<{
  id: number;
  index: number;
  details: string;
  creator: string;
  title: string;
}> = ({ title, index, creator, details }) => {
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
      className={`${classes.project} ${
        index % 2 === 1 && classes.project_indent
      }`}
    >
      <div className={classes.project_overlay} ref={gradientRef}></div>
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

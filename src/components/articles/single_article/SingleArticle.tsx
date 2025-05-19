import React from "react";
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
  //     const gradientRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     const handleMouseMove = (event: MouseEvent) => {
  //       if (gradientRef.current) {
  //         const { clientX, clientY } = event;
  //         const rect = gradientRef.current.getBoundingClientRect();
  //         const isInsideContainer =
  //           clientX >= rect.left &&
  //           clientX <= rect.right &&
  //           clientY >= rect.top &&
  //           clientY <= rect.bottom;

  //         if (isInsideContainer) {
  //           const posX = ((clientX - rect.left) / rect.width) * 100;
  //           const posY = ((clientY - rect.top) / rect.height) * 100;
  //           const gradientValue = `radial-gradient(91.76% 217.86% at ${
  //             posX + 5
  //           }% ${
  //             posY + 5
  //           }%, rgba(0, 0, 0, 0.35) 0%, rgba(17, 21, 28, 0.65) 34.5%)`;
  //           gradientRef.current.style.background = gradientValue;
  //         }
  //       }
  //     };

  //     document.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       document.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  return (
    <div
      className={`${classes.article} ${
        index % 2 === 1 && classes.article_indent
      }`}
    >
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

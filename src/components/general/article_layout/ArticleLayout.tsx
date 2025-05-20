import React, { ReactNode } from "react";
import Nav from "../nav/Nav";
import classes from "./ArticleLayout.module.scss";
import { IoMdTime } from "react-icons/io";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoReturnUpBackSharp } from "react-icons/io5";

interface ArticleLayoutProps {
  route?: "projects" | "articles";
  children: ReactNode;
  title: string;
  subtitle: string;
  nextPost: string;
  nextPostId: string;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  route = "projects",
  children,
  title,
  subtitle,
  nextPost,
  nextPostId,
}) => {
  return (
    <div className={classes.layout}>
      <div className={classes.layout_container}>
        <div className={classes.layout_small_screen}>
          <Nav />
        </div>

        <Link href={`/${route}`}>
          <div className={classes.layout_big_screen}>
            <IoReturnUpBackSharp />
            <span>Back</span>
          </div>
        </Link>

        <div className={classes.layout_intro}>
          <div className={classes.layout_intro_details}>
            <small>
              {" "}
              <SlCalender />
              20th May 2025
            </small>
            <small>
              {" "}
              <IoMdTime />5 mins read
            </small>
          </div>
          <div className={classes.layout_intro_title}>
            <h4>{title}</h4>
            <small>{subtitle}</small>
          </div>
        </div>
        <div className={classes.layout_children}>{children}</div>
        <Link href={`/${route}/${nextPostId}`}>
          <div className={classes.layout_next}>
            <small>
              next post <IoIosArrowRoundForward />
            </small>
            <p>{nextPost}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleLayout;

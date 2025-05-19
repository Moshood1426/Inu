import React from "react";
import SingleArticle from "./single_article/SingleArticle";
import classes from "./Articles.module.scss";
import Link from "next/link";
import { IoCaretForwardOutline } from "react-icons/io5";
import Nav from "../general/nav/Nav";

const articles = [
  {
    id: 0,
    category: "Article Category",
    date: "January 01, 2022",
    title: "Article Title",
    time: "19 mins read",
  },
  {
    id: 1,
    category: "Article Category",
    date: "January 01, 2022",
    title: "Article Title",
    time: "19 mins read",
  },
  {
    id: 2,
    category: "Article Category",
    date: "January 01, 2022",
    title: "Article Title",
    time: "19 mins read",
  },
  {
    id: 3,
    category: "Article Category",
    date: "January 01, 2022",
    title: "Article Title",
    time: "19 mins read",
  },
  {
    id: 4,
    category: "Article Category",
    date: "January 01, 2022",
    title: "Article Title",
    time: "19 mins read",
  },
];

const Articles = () => {
  return (
    <div className={classes.articles}>
      <div className={classes.articles_container}>
        <div className={classes.articles_nav}>
          <Nav />
        </div>

        <p className={classes.articles_label}>Articles</p>
        
        <div className={classes.articles_grid}>
          {articles.map((item) => (
            <SingleArticle {...item} key={item.id} />
          ))}
        </div>

        <div className={classes.articles_actions}>
          <Link href={"/"} className={`btn btn_light ${classes.articles_btn}`}>
            <IoCaretForwardOutline className={classes.articles_btn_rot} /> Home
          </Link>
          <Link
            href={"/about"}
            className={`btn btn_light ${classes.articles_btn}`}
          >
            About Us <IoCaretForwardOutline />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;

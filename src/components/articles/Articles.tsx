import React from "react";
import SingleArticle from "./single_article/SingleArticle";
import classes from "./Articles.module.scss";
import Link from "next/link";
import { IoCaretForwardOutline } from "react-icons/io5";
import Nav from "../general/nav/Nav";

const articles = [
  {
    id: 0,
    category: "personal",
    date: "May 15, 2025",
    title: "My Learning Journey",
    time: "19 mins read",
    img: "/images/web-img-1.jpg",
  },
  {
    id: 1,
    category: "interviews",
    date: "May 15, 2025",
    title: "Experts Weigh In: The Future of Sustainable Architecture",
    time: "19 mins read",
    img: "/images/web-img-3.jpg",
  },
  {
    id: 2,
    category: "Article Category",
    date: "January 01, 2022",
    title:
      "Beyond the Build: Professionals Talk Sustainability in Architecture",
    time: "19 mins read",
    img: "/images/web-img-2.jpg",
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
          <Link
            href={"/projects"}
            className={`btn btn_light ${classes.articles_btn}`}
          >
            <IoCaretForwardOutline className={classes.articles_btn_rot} />{" "}
            Projects
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

import React from "react";
import SingleArticle from "./single_article/SingleArticle";
import classes from "./Articles.module.scss";
import Link from "next/link";
import { IoCaretForwardOutline } from "react-icons/io5";
import Nav from "../general/nav/Nav";

const articles = [
  {
    id: 1,
    category: "program review",
    date: "May 15, 2025",
    title: "Digital Tools and Sustainable Architecture",
    time: "19 mins read",
    img: "/images/web-img-1.jpg",
  },
  {
    id: 2,
    category: "program review",
    date: "May 15, 2025",
    title:
      "From Abstract to Tangible: The MIAD Program's Pedagogical Framework",
    time: "19 mins read",
    img: "/images/web-img-3.jpg",
  },
  {
    id: 3,
    category: "program review",
    date: "January 01, 2022",
    title:
      "Architecture as an 'Agent of Change': Communication and Advocacy in the Mass Media Era",
    time: "19 mins read",
    img: "/images/web-img-2.jpg",
  },
  {
    id: 4,
    category: "Personal",
    date: "January 01, 2022",
    title: "My Journey LaSalle Experience",
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

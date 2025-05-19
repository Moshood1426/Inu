import React from "react";
import classes from "./Projects.module.scss";
import Nav from "../general/nav/Nav";
import SingleProject from "./SingleProject/SingleProject";
import Link from "next/link";
import { IoCaretForwardOutline } from "react-icons/io5";

const content = [
  {
    id: 1,
    title: "Archi Project",
    creator: "Summer walker",
    details: "A content that depicts modern arhitecture ",
  },
  {
    id: 2,
    title: "Archi Project",
    creator: "Summer walker",
    details: "A content that depicts modern arhitecture ",
  },
  {
    id: 3,
    title: "Archi Project",
    creator: "Summer walker",
    details: "A content that depicts modern arhitecture ",
  },
  {
    id: 4,
    title: "Archi Project",
    creator: "Summer walker",
    details: "A content that depicts modern arhitecture ",
  },
  {
    id: 5,
    title: "Archi Project",
    creator: "Summer walker",
    details: "A content that depicts modern arhitecture ",
  },
  {
    id: 6,
    title: "Archi Project",
    creator: "Summer walker",
    details: "A content that depicts modern arhitecture ",
  },
  {
    id: 7,
    title: "Archi Project",
    creator: "Summer walker",
    details: "A content that depicts modern arhitecture ",
  },
];

const Projects = () => {
  return (
    <div className={classes.projects}>
      <div className={classes.projects_container}>
        {/* <div className={classes.projects_nav}>
          <Nav />
        </div> */}

        <p className={classes.projects_label}>Projects</p>

        <div className={classes.projects_grid}>
          {content.map((item, index) => (
            <SingleProject {...item} index={index} key={item.id} />
          ))}
        </div>

        <div className={classes.projects_actions}>
          <Link href={"/"} className={`btn btn_light ${classes.projects_btn}`}>
            <IoCaretForwardOutline className={classes.projects_btn_rot} /> Home
          </Link>
          <Link
            href={"/articles"}
            className={`btn btn_light ${classes.projects_btn}`}
          >
            Articles <IoCaretForwardOutline />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

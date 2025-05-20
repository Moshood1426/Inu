import React from "react";
import classes from "./Projects.module.scss";

import SingleProject from "./SingleProject/SingleProject";
import Link from "next/link";
import { IoCaretForwardOutline } from "react-icons/io5";

const content = [
  {
    id: 1,
    title: "Digital Logic: Building with Code, Craft, and Intuition ",
    creator: "Featuring Ciro Najle, Anna Font, Neslihan Gülhan, Edouard Cabay ",
    details: "A content that depicts modern arhitecture ",
    img: "/images/web-img-1.jpg",
  },
  {
    id: 2,
    title: "Social Logic: From Place-Making to People-Making",
    creator:
      "Featuring Roger Paez, Ángel Martín Cojo, Pau Bajet, Mariona Benedito",
    details: "A content that depicts modern arhitecture ",
    img: "/images/web-img-3.jpg",
  },
  {
    id: 3,
    title: "Environmental Logic: Energy, Landscape, and Systems Thinking",
    creator:
      "Featuring Alex Ivancic, Ferran Vizoso, Javier García-Germán, Cristina Goberna Pesudo",
    details: "A content that depicts modern arhitecture ",
    img: "/images/web-img-2.jpg",
  },
  {
    id: 4,
    title: "Tectonics Logic: Learning by Building ",
    creator: "Featuring David Tapias, Francisco Cifuentes",
    details: "A content that depicts modern arhitecture ",
    img: "/images/web-img-3.jpg",
  },
  {
    id: 5,
    title: "Cultural Logic: Architecture as Message and Medium ",
    creator: "Featuring Ivan Blasi, Olga Subirós, Ricardo Devesa",
    details: "A content that depicts modern arhitecture ",
    img: "/images/web-img-2.jpg",
  },
];

const Projects = () => {
  return (
    <div className={classes.projects}>
      <div className={classes.projects_container}>
        <p className={classes.projects_label}>My Works</p>

        <div className={classes.projects_grid}>
          {content.map((item) => (
            <SingleProject {...item} key={item.id} />
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

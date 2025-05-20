import React from "react";
import classes from "./projectOne.module.scss";
import ArticleLayout from "@/components/general/article_layout/ArticleLayout";

const ProjectOne = () => {
  return (
    <ArticleLayout
      title={"Digital Logic: Building with Code, Craft, and Intuition "}
      subtitle={
        "Featuring Ciro Najle, Anna Font, Neslihan Gülhan, Edouard Cabay "
      }
      nextPost="Social Logic: From Place-Making to People-Making"
      nextPostId={"2"}
    >
      <section className={classes.article_section}>
        <p>
          &quot;We’re not just using AI to generate shapes,&quot; says Anna
          Font. &quot;We’re teaching students how to think critically with
          machines—how to use digital tools to uncover hidden potentials in
          architectural history and material performance.&quot; Digital Logic
          courses like <em>Artificial Intelligence of Doing Architecture</em>{" "}
          and <em>Materiality and Scale</em> invite students to engage
          algorithms as creative partners. Through Midjourney, machine learning,
          and analog protocols, students learn that code is a new kind of craft.
          &quot;The hand-drawn protocols we use aren’t just nostalgic,&quot;
          explains Edouard Cabay. &quot;They’re a bridge—connecting bodily
          action to computational logic. It’s about understanding material
          impacts and resource use through design patterns.&quot;
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ProjectOne;

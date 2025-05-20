import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import Image from "next/image";
import React from "react";
import classes from "./projectFour.module.scss";
import introImg from "../../../assets/images/digitaal.jpg";

const ProjectFour = () => {
  return (
    <ArticleLayout
      title="Tectonics Logic: Learning by Building"
      subtitle="Featuring David Tapias, Francisco Cifuentes"
      nextPostId={"5"}
      nextPost="Cultural Logic: Architecture as Message and Medium "
    >
      <section className={classes.article_section}>
        <Image
          src={introImg}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
      </section>

      <section className={classes.article_section}>
        <p>
          The Tectonics Logic, exemplified by &quot;Tectonics and Project
          Analysis,&quot; brings sustainability down to the physical reality of
          building. This module focuses on wood as a primary material, exploring
          its potential for sustainable solutions and addressing challenges in
          specific environments like Southern Europe. The
          &quot;Learning-to-build-by-building&quot; approach, which involves
          creating 1:1 scale structures using local materials and techniques,
          teaches practical sustainability challenges and promotes structural
          and material efficiency. This logic probes how material choice impacts
          environmental footprint and what traditional crafts can teach us about
          modern sustainable construction.
        </p>
      </section>

      <section>
        <p>
          How do we teach sustainable construction? By building. &quot;1:1 scale
          structure is the heart of the tectonics course,&quot; says David
          Tapias. &quot;Students don’t just design with wood—they understand its
          origin, limits, and assembly through making.&quot; Francisco Cifuentes
          adds, “Sustainability is not abstract here. It&quot;s about life
          cycles, material ethics, and constructability. We show students that
          every joint, every corner, tells a story.&quot;
        </p>
      </section>

      <section>
        <p>
          Tectonics Logic, particularly &quot;Tectonics and Project
          Analysis,&quot; has deepened my appreciation for materials, especially
          wood, as a sustainable building solution for the 21st century. The
          &quot;Learning-to-build-by-building&quot; approach, culminating in
          making a 1:1 scale structure using local materials and techniques, has
          been a hands-on experience that has reinforced the urgent need for
          alternatives to the &quot;war on nature scenario&quot;.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ProjectFour;

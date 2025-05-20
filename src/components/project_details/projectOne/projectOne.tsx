import React from "react";
import classes from "./projectOne.module.scss";
import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import introImg from "../../../assets/images/digitaal.jpg";
import Image from "next/image";

const ProjectOne = () => {
  return (
    <ArticleLayout
      title={
        "Digital Tools and Sustainable Architecture: Promises and Pitfalls"
      }
      subtitle={
        "Featuring Ciro Najle, Anna Font, Neslihan Gülhan, Edouard Cabay "
      }
      nextPost="Social Logic: From Place-Making to People-Making"
      nextPostId={"2"}
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
          Digital tools, encompassing algorithmic design and Artificial
          Intelligence (AI), offer powerful avenues for advancing sustainable
          architecture. They enable architects to analyze complex environmental
          data, simulate building performance under various conditions, and
          optimize designs for energy efficiency, material usage, and passive
          climate control. For example, the MIAD program&apos;s
          &quot;Environmental Logics&quot; section highlights the use of
          simulation for environmental evaluation and the emphasis on passive
          systems and renewable energy, facilitated by such tools. Algorithmic
          design can generate innovative forms and structural systems that are
          highly efficient, minimizing waste and maximizing resource
          utilization. AI can further enhance this by learning from vast
          datasets of sustainable building practices, leading to predictive
          modeling and intelligent design solutions that might otherwise be
          impossible to achieve through traditional methods. The ability to
          model material flows and understand a building&apos;s interaction with
          the global metabolism is also a key promise, allowing for more
          informed decisions about material sourcing and lifecycle.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          &quot;We’re not just using AI to generate shapes,&quot; says Anna
          Font. “We’re teaching students how to think critically with
          machines—how to use digital tools to uncover hidden potentials in
          architectural history and material performance.” Digital Logic courses
          like Artificial Intelligence of Doing Architecture and Materiality and
          Scale invite students to engage algorithms as creative partners.
          Through Midjourney, machine learning, and analog protocols, students
          learn that code is a new kind of craft. &quot;The hand-drawn protocols
          we use aren’t just nostalgic,&quot; explains Edouard Cabay. “They’re a
          bridge—connecting bodily action to computational logic. It’s about
          understanding material impacts and resource use through design
          patterns.”
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          The emerging Digital Logic introduces algorithmic design and AI in a
          sustainable world. While the provided data outlines the intention to
          examine the limitations and ethical considerations of digital tools,
          particularly regarding access and equity in developing countries, and
          the connection between algorithms and tangible sustainable materials,
          further elaboration on how these tools directly contribute to
          sustainable outcomes would be beneficial.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ProjectOne;

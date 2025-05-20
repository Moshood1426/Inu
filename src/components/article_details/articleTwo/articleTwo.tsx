import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import React from "react";
import classes from "./articleTwo.module.scss";
import Image from "next/image";
import introImg from "../../../assets/images/masters-1.jpg";
import mastersTwo from "../../../assets/images/masters-2.jpg";
import mastersThree from "../../../assets/images/masters-3.jpg";

const ArticleTwo = () => {
  return (
    <ArticleLayout
      route="articles"
      title={
        "From Abstract to Tangible: The MIAD Program's Pedagogical Framework"
      }
      subtitle={" "}
      nextPost="Architecture as an 'Agent of Change': Communication and Advocacy in the Mass Media Era"
      nextPostId={"3"}
    >
      <section className={classes.article_section}>
        <Image
          src={mastersTwo}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          MIAD - La Salle Campus Barcelona
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          The Master in Integrated Architectural Design (MIAD) program
          distinguishes itself through a pedagogical framework that effectively
          bridges the gap between abstract architectural concepts and tangible,
          real-world application. At its core, the MIAD program champions a
          &quot;Learning-to-build-by-building&quot; approach, complemented by a
          strong emphasis on practical application through fieldwork, site
          visits, workshops, and the construction of prototypes. These
          methodologies are crucial in fostering a profound understanding of
          sustainable architectural principles and equipping students with the
          necessary skills to navigate the complexities of real-world
          challenges.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          The &quot;Learning-to-build-by-building&quot; approach is a
          cornerstone of MIAD&apos;s Tectonics Logic, particularly highlighted
          in the &quot;Tectonics and Project Analysis&quot; module. This module
          focuses on wood as a primary building material, encouraging students
          to understand its potential and constraints for the 21st century. The
          hands-on nature of this approach is evident in the culmination of the
          module, where students create a 1:1 scale structure using provided
          materials and local availabilities (materials, tools, techniques,
          place). This direct engagement with materials and construction
          processes moves beyond theoretical understanding, allowing students to
          grasp the physical reality of building and how material choices
          directly impact environmental footprint. It also encourages them to
          propose practical, sustainable solutions for contemporary contexts.
        </p>
      </section>

      <section className={classes.article_section}>
        <Image
          src={introImg}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          MIAD - La Salle Campus Barcelona
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          Beyond the individual act of building, the MIAD program integrates a
          broader spectrum of practical applications. Fieldwork, observation,
          and direct engagement with inhabitants are key methodologies within
          the Social Logics, particularly in modules like &quot;Urban
          Interstices&quot; and &quot;Materialization of Urban Space: Hidden
          Structures&quot;. These activities enable students to analyze social
          contexts, understand the human and community dimensions of
          architecture, and actively involve citizens in the design process.
          This direct interaction ensures that sustainable design outcomes are
          not just environmentally sound but also socially equitable and
          beneficial for community well-being.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          Workshops play a vital role in translating theoretical knowledge into
          tangible outcomes. For instance, within the Environmental Logics, the
          &quot;Territories of Contemporaneity&quot; module includes a workshop
          focused on creating a climate prototype using passive systems. This
          allows students to experiment with managing environmental conditions
          and minimizing environmental impact in a practical setting. These
          workshops, along with site visits, provide students with direct
          exposure to existing architectural solutions and real-world
          environmental and social challenges.
        </p>
        <p>
          The emphasis on building prototypes further reinforces the
          program&apos;s practical orientation. The creation of a climate
          prototype, as mentioned, is a prime example of this. Such activities
          allow students to test and refine their sustainable design concepts,
          transitioning from abstract ideas to functional models. This iterative
          process of designing, building, and evaluating is fundamental to
          fostering a deeper understanding of sustainable architectural
          principles and preparing students for the iterative and
          problem-solving nature of real-world architectural practice.
        </p>
      </section>

      <section className={classes.article_section}>
        <Image
          src={mastersThree}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          MIAD - La Salle Campus Barcelona
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          In summary, the MIAD program&apos;s pedagogical framework,
          characterized by its &quot;Learning-to-build-by-building&quot;
          approach and the integrated use of practical application, fieldwork,
          site visits, workshops, and building prototypes, offers a
          comprehensive and effective educational experience. By engaging
          students directly with the tangible aspects of architectural design
          and construction, the program cultivates a deeper understanding of
          sustainable principles across environmental, social, material, and
          critical facets. This hands-on, experiential learning model is highly
          effective in preparing students not just with theoretical knowledge,
          but with the practical skills and critical thinking necessary to
          address the complex and evolving challenges of sustainable
          architecture in the real world.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ArticleTwo;

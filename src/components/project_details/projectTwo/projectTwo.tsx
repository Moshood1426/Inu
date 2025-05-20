import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import React from "react";
import classes from "./projectTwo.module.scss";
import Image from "next/image";
import introImg from "../../../assets/images/digitaal.jpg";

const ProjectTwo = () => {
  return (
    <ArticleLayout
      title="Social Logic: From Place-Making to People-Making"
      subtitle="Featuring Roger Paez, Ángel Martín Cojo, Pau Bajet, Mariona Benedito"
      nextPost="Environmental Logic: Energy, Landscape, and Systems Thinking"
      nextPostId={"3"}
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
          Social Logics delve into the human and societal dimensions of
          sustainable architecture. Through subjects such as &quot;Urban
          Interstices&quot; and &quot;Materialization of Urban Space: Hidden
          Structures,&quot; the program explores the creation of
          &quot;place&quot; through &quot;appropriation&quot; and the vital
          importance of including citizens in the design process. This
          highlights that sustainability extends beyond environmental metrics,
          deeply intertwining with social equity and community well-being.
          Fieldwork, observation, and direct engagement are key methodologies,
          fostering a critical understanding of collective housing models and
          the bonds between people and their environment.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          The Social Logics have been equally eye-opening, focusing on the human
          and community dimensions of architecture. Modules like &quot;Urban
          Interstices&quot; and &quot;Materialization of Urban Space: Hidden
          Structures&quot; have introduced me to the critical distinction
          between &quot;Place&quot; and &quot;space,&quot; emphasizing how
          places are created through appropriation and everyday actions.
          Learning to analyze social context and involve citizens in the design
          process through fieldwork and direct engagement has been a profound
          lesson in designing with communities, not just for them.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          &quot;Urban sustainability isn’t just green roofs or bike lanes,&quot;
          says Ángel Martín Cojo. &quot;It’s about how people live, feel, and
          shape space.” The Social Logic modules confront this reality head-on,
          from participatory design in Urban Interstices to the mapping of
          community dynamics in Mediation Systems. Students step into the
          field—not just to observe but to engage. &quot;They conduct
          interviews, trace how space is used, and reflect on their role as
          designers within living communities,&quot; says Roger Paez. “By
          studying inhabited environments—especially cooperative housing—we open
          up questions of ownership, inclusion, and attachment,” adds Mariona
          Benedito.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ProjectTwo;

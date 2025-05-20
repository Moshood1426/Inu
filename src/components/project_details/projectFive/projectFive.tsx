import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import Image from "next/image";
import React from "react";
import classes from "./projectFive.module.scss";
import introImg from "../../../assets/images/digitaal.jpg";

const ProjectFive = () => {
  return (
    <ArticleLayout
      title="Cultural Logic: Architecture as Message and Medium"
      subtitle="Featuring Ivan Blasi, Olga Subirós, Ricardo Devesa "
      nextPostId={"1"}
      nextPost="Digital Logic: Building with Code, Craft, and Intuition "
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

      <section>
        <p>
          Cultural Logics examine architecture as a cultural phenomenon and its
          capacity to reflect and influence social, political, and environmental
          aspects. Modules like &quot;Architectural Environments (Disseminating
          Architecture in the Mass Media Era)&quot; explore the role of media in
          shaping discourse around sustainable architecture, advocating for
          sustainable practices, and making complex concepts accessible in
          diverse cultural contexts. This logic underscores that even the most
          sustainable building needs to be understood and embraced by people,
          prompting questions about how architects can use communication to
          drive positive change and move away from unsustainable patterns of
          consumption.
        </p>
      </section>

      <section>
        <p>
          How does architecture talk back to the world? Cultural Logic courses
          ask students to reflect on media, meaning, and social narratives. “We
          explore how architecture is communicated and consumed,” says Ivan
          Blasi. “From awards to exhibitions, every project has a public life.”
          Olga Subirós, known for her work on air quality in Venice Biennale,
          frames it this way: “The crisis of the object is real. Students must
          learn to critique consumption, propose circular solutions, and
          advocate for change.” “Architecture isn’t just technical,” says
          Ricardo Devesa. “It’s cultural. It shapes how we think, live, and
          hope.”
        </p>
      </section>

      <section>
        <p>
          The Cultural Logics have highlighted architecture&apos;s capacity to
          reflect and influence social, political, and environmental aspects.
          While focusing on communication in the mass media era, it acknowledges
          architecture&apos;s role in addressing environmental concerns.
          Finally, the Research Methodology courses have provided the framework
          to transform my interests into formal research, allowing me to delve
          into specific sustainability topics and build a solid foundation for
          future work.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ProjectFive;

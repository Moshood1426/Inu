import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import React from "react";
import classes from "./projectThree.module.scss";
import Image from "next/image";
import introImg from "../../../assets/images/digitaal.jpg";

const ProjectThree = () => {
  return (
    <ArticleLayout
      title="Environmental Logic: Energy, Landscape, and Systems Thinking"
      subtitle="Featuring Alex Ivancic, Ferran Vizoso, Javier García-Germán, Cristina Goberna Pesudo"
      nextPost="Tectonics Logic: Learning by Building "
      nextPostId={"4"}
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
          The Environmental Logics are perhaps the most explicit in their focus
          on ecological sustainability. Subjects like &quot;The Scales of
          Landscape (Energy Resources in Architecture)&quot; position energy
          infrastructure as a primary design driver, urging students to
          understand a building&quot;s role within the broader energy transition
          ecosystem. &quot;Territories of Contemporaneity (The Project of the
          Ground)&quot; challenges conventional planning, promoting climatic,
          metabolic, and post-occupancy logics to understand how design
          interacts with global material and energy flows. Practical workshops
          in this area focus on creating climate prototypes using passive
          systems to manage environmental conditions and minimize impact.
          Furthermore, &quot;Energy and Envelope (Architectural Agonism. Current
          Topics, Possible Futures)&quot; encourages critical engagement with
          contemporary environmental and social issues, including a
          deconstruction of the idea of sustainability. These modules directly
          confront the ecological imperative, asking how design can truly
          respond to local climate and resource availability and how scientific
          concepts translate into actionable design decisions.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          In the Environmental Logic modules, sustainability gets scientific—but
          never at the expense of imagination. “Energy is not just a number to
          calculate. It’s a design tool,” says Alex Ivancic, whose course Scales
          of Landscape teaches students to see infrastructure as spatial
          opportunity. From the Territories of Contemporaneity workshop, Ferran
          Vizoso explains: “We ask students to create climate prototypes based
          on their origins. It’s not about exporting solutions—it’s about rooted
          design.” For Cristina Goberna Pesudo, sustainability is also about
          discourse: “We use the concept of agonism to explore how architecture
          can engage with controversy—challenging assumptions and proposing
          futures.”
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          The Environmental Logics have pushed me to view energy not just as a
          resource but as a key design driver. Courses like &quot;The Scales of
          Landscape (Energy Resources in Architecture)&quot; have illuminated
          the building&apos;s role within the broader energy transition
          ecosystem and the impact of climate change on architectural projects.
          &quot;Territories of Contemporaneity (The Project of the Ground)&quot;
          broadened my perspective, teaching me to see cities as interconnected
          systems interacting with the atmosphere and geo-biosphere, and
          encouraging me to question orthodox planning techniques. The practical
          workshops, creating climate prototypes using passive systems, have
          been invaluable in translating theoretical knowledge into tangible
          solutions. Even &quot;Energy and Envelope (Architectural Agonism.
          Current Topics, Possible Futures)&quot; has fostered critical
          thinking, prompting me to confront contemporary architectural debates
          and propose future visions that grapple with complex environmental and
          social issues.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ProjectThree;

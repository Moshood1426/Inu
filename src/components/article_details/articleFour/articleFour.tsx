import React from "react";
import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import Image from "next/image";
import classes from "./articleFour.module.scss";
import introImg from "../../../assets/images/LaSalle-1.jpg";
import lasalletwo from "../../../assets/images/masters-2.jpg";
import lasallethree from "../../../assets/images/laSalle-3.jpg";
import lasalleFour from "../../../assets/images/laSalle.jpg";
import lasalleFive from "../../../assets/images/lasallefive.jpg";

const ArticleFour = () => {
  return (
    <ArticleLayout
      route="articles"
      title={"My Journey LaSalle Experience"}
      subtitle={" "}
      nextPost="Digital Tools and Sustainable Architecture: Promises and Pitfalls"
      nextPostId={"1"}
    >
      <section className={classes.article_section}>
        <Image
          src={introImg}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          LaSalle University - Barcelona
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          Embarking on a Master in Integrated Architectural Design (MIAD) at La
          Salle has been far more than just pursuing a postgraduate degree; it
          has been a transformative journey that has reshaped my understanding
          of architecture and its profound impact on society and the
          environment. The MIAD program, with its integrated approach to design,
          technology, and culture, has challenged me to rethink significant
          phenomena affecting our world through evolving architectural concepts.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          From the outset, the program made it clear that architectural design
          and construction are not static disciplines. They must continuously
          adapt to pressing global challenges, including climate change,
          technological disruptions, economic shifts, geopolitical strategies,
          and demographic movements. This emphasis on real-world relevance has
          made my learning experience incredibly engaging and thought-provoking.
        </p>
        <p>
          A core aspect of this journey has been the pervasive integration of
          sustainability education, woven into the very fabric of the curriculum
          through distinct &quot;logics&quot;—environmental, social, material,
          and critical. This isn&quot;t confined to a single course but is a
          holistic framework that ensures sustainability is considered from
          every angle.
        </p>
      </section>

      <section className={classes.article_section}>
        <Image
          src={lasalletwo}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          LaSalle University - Barcelona
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          For instance, the Environmental Logics have pushed me to view energy
          not just as a resource but as a key design driver. Courses like
          &quot;The Scales of Landscape (Energy Resources in Architecture)&quot;
          have illuminated the building&apos;s role within the broader energy
          transition ecosystem and the impact of climate change on architectural
          projects. &quot;Territories of Contemporaneity (The Project of the
          Ground)&quot; broadened my perspective, teaching me to see cities as
          interconnected systems interacting with the atmosphere and
          geo-biosphere, and encouraging me to question orthodox planning
          techniques. The practical workshops, creating climate prototypes using
          passive systems, have been invaluable in translating theoretical
          knowledge into tangible solutions. Even &quot;Energy and Envelope
          (Architectural Agonism. Current Topics, Possible Futures)&quot; has
          fostered critical thinking, prompting me to confront contemporary
          architectural debates and propose future visions that grapple with
          complex environmental and social issues.
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

      <section className={classes.article_section}>
        <Image
          src={lasallethree}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          LaSalle University Master Plan- Kimmel Bogrette Architecture
        </small>
      </section>

      <section>
        <p>
          The Cultural Logics have highlighted architecture&quot;s capacity to
          reflect and influence social, political, and environmental aspects.
          While focusing on communication in the mass media era, it acknowledges
          architecture&quot;s role in addressing environmental concerns.
          Finally, the Research Methodology courses have provided the framework
          to transform my interests into formal research, allowing me to delve
          into specific sustainability topics and build a solid foundation for
          future work. This integrated approach, combining theoretical knowledge
          with practical application, fieldwork, and prototyping, has truly made
          my master&quot;s journey an immersive and comprehensive experience,
          preparing me to contribute meaningfully to the evolving field of
          architecture.
        </p>
      </section>

      <section>
        <h5>
          Unpacking Sustainable Architectural Education: A Look Through the MIAD
          Logics
        </h5>
        <p>
          Sustainable architecture is no longer an optional add-on but a
          critical imperative in addressing the multifaceted global challenges
          of our time, from climate change and resource scarcity to social
          inequality. The Master in Integrated Architectural Design (MIAD)
          program at La Salle offers a compelling model for integrating this
          vital perspective into architectural education through a curriculum
          structured around distinct yet interconnected &quot;logics&quot;:
          Digital, Social, Environmental, Tectonics, and Cultural.
        </p>
      </section>

      <section className={classes.article_section}>
        <Image
          src={lasalleFour}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          LaSalle University Master Plan- Kimmel Bogrette Architecture
        </small>
      </section>

      <section>
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

      <section>
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

      <section>
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

      <section className={classes.article_section}>
        <Image
          src={lasalleFive}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          LaSalle University Master Plan- Kimmel Bogrette Architecture
        </small>
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

      <section>
        <p>
          While the existing integration across these logics appears
          comprehensive, strengthening transversal connections explicitly
          concerning sustainability could further enhance the program. For
          example, linking the social impacts studied in Social Logics with the
          environmental technologies explored in Environmental Logics, or
          connecting the material constraints of Tectonics Logic to the
          metabolic flows discussed in Environmental Logics, would solidify an
          integrated understanding. Making these explicit links across all
          logics would reinforce the holistic nature of sustainable
          architectural education.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ArticleFour;

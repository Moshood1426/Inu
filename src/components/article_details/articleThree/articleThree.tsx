import ArticleLayout from "@/components/general/article_layout/ArticleLayout";
import React from "react";
import classes from "./articleThree.module.scss";
import Image from "next/image";
import introImg from "../../../assets/images/arc-1.jpg";
import arcTwo from "../../../assets/images/arc-2.jpg";
import arcThree from "../../../assets/images/arc-3.jpg";

const ArticleThree = () => {
  return (
    <ArticleLayout
      route="articles"
      title={
        "Architecture as an 'Agent of Change': Communication and Advocacy in the Mass Media Era"
      }
      subtitle={" "}
      nextPost="My Journey LaSalle Experience"
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
        <small className={classes.article_small}>
          Achitecture evolving role - Archdaily
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          In the contemporary landscape, architecture transcends its traditional
          role as merely the creation of physical structures, emerging as a
          potent &quot;agent of change&quot; capable of shaping societal
          attitudes and driving critical shifts. This transformative capacity is
          deeply rooted in what can be understood as &quot;Cultural
          Logics,&quot; a framework that recognizes architecture as a cultural
          phenomenon inherently linked to broader societal, political, and
          environmental currents. In an era dominated by mass media, the ability
          of architects to communicate and advocate effectively becomes
          paramount in influencing public perception, critiquing prevailing
          norms, and championing a more sustainable future.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          The Master in Integrated Architectural Design (MIAD) program&apos;s
          &quot;Cultural Logics&quot; stream exemplifies this perspective,
          exploring architecture&apos;s role as a medium that reflects and
          influences various facets of human existence. This logic highlights
          how architectural environments are not static objects but dynamic
          entities that participate in a continuous dialogue with their cultural
          context. Through this lens, architecture&apos;s capacity to influence
          societal attitudes becomes clear: the spaces we inhabit, both
          physically and conceptually, subtly (or overtly) inform our values,
          behaviors, and understanding of the world. Therefore, when architects
          design with intent – be it for sustainability, social equity, or
          economic resilience – they are, in essence, crafting the physical
          manifestations of desired societal changes.
        </p>
        <p>
          The mass media era presents both unprecedented opportunities and
          significant challenges for architects aiming to leverage their work as
          an agent of change. Media, in its myriad forms, plays a crucial role
          in shaping public discourse around sustainable architecture.
          Architects can strategically utilize various media channels – from
          online platforms and social media to videos, interactive activities,
          and traditional publications – to disseminate their ideas and advocate
          for transformative practices. By actively engaging with these
          channels, architects can move beyond the confines of professional
          circles and reach a broader public, translating complex design
          principles into accessible and engaging narratives.
        </p>
      </section>

      <section className={classes.article_section}>
        <Image
          src={arcTwo}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          Passive aggresive design - The Architect Newspaper
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          One of the critical areas where architects can exert their influence
          is in advocating for sustainable practices. This involves not only
          designing environmentally responsible buildings but also communicating
          the rationale and benefits behind such designs. Through compelling
          visualisations, articles, and public presentations, architects can
          highlight the environmental advantages of passive systems, renewable
          energy integration, and sustainable material choices. They can educate
          the public on the long-term economic and ecological benefits, making
          sustainability a more tangible and desirable goal. The
          &quot;Environmental Logics&quot; within architectural education, which
          explicitly addresses energy, climate, and metabolic interactions,
          provides a foundation for architects to articulate these concepts
          effectively to a wider audience.
        </p>
        <p>
          Furthermore, architecture, as an agent of change, must critically
          examine and critique mass production and consumerism, particularly in
          relation to architectural objects. The current linear economy often
          promotes a &quot;take-make-dispose&quot; model, leading to excessive
          waste and resource depletion. Architects, through their designs and
          public communication, can challenge this paradigm. By promoting
          designs that prioritize durability, adaptability, and the use of
          recycled or renewable materials, they can implicitly critique the
          unsustainable practices of mass production. Media can be a powerful
          tool to expose the environmental and social costs of throwaway
          architecture and to highlight projects that exemplify a more
          responsible approach.
        </p>
      </section>

      <section className={classes.article_section}>
        <Image
          src={arcThree}
          width={"600"}
          height={"400"}
          alt=""
          className={classes.article_img}
        />
        <small className={classes.article_small}>
          Life Expressionism by Brani & Desi
        </small>
      </section>

      <section className={classes.article_section}>
        <p>
          Crucially, architects can actively promote a circular economy in
          design, where materials and products are kept in use for as long as
          possible, minimizing waste and maximizing resource efficiency. This
          involves designing for disassembly, incorporating modularity, and
          fostering local material sourcing and craftsmanship. By showcasing
          successful examples of circular design through media, architects can
          inspire industry-wide adoption and shift consumer expectations. They
          can demonstrate how buildings can be conceived as material banks, with
          components designed for future reuse and recycling. The
          &quot;Tectonics Logic,&quot; which emphasizes understanding material
          potential and constraints and promotes a
          &quot;learning-to-build-by-building&quot; approach with local
          availabilities, directly supports this advocacy for a circular
          economy.
        </p>
      </section>

      <section className={classes.article_section}>
        <p>
          In conclusion, architecture, guided by &quot;Cultural Logics,&quot;
          possesses an inherent capacity to influence societal attitudes and act
          as a powerful agent of change. In the mass media era, architects have
          an amplified responsibility and opportunity to leverage various
          communication channels to advocate for sustainable practices, critique
          the detrimental effects of mass production and consumerism, and
          champion the principles of a circular economy in design. By engaging
          proactively with the media, architects can not only shape the built
          environment but also foster a more conscious, sustainable, and
          equitable society.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ArticleThree;

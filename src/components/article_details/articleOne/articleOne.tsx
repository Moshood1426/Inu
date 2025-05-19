import React from "react";
import classes from "./articleOne.module.scss";

const ArticleOne = () => {
  return (
    <div className={classes.article}>
      <div className={classes.article_container}>
        <div className={classes.article_title}>
          <h3>
            Unpacking Sustainability Through Design: A Faculty Roundtable on the
            MIAD Logics
          </h3>
        </div>

        <section className={classes.article_section}>
          <p>
            At La Salle’s School of Architecture (ETSALS), sustainability isn’t
            a separate class. It’s a way of thinking. The Master in Integrated
            Architectural Design (MIAD) program organizes its approach around
            five core &quot;logics&quot;: Digital, Social, Environmental,
            Tectonics, and Cultural. Each offers a unique lens for rethinking
            how architects can meaningfully respond to today’s urgent global
            challenges. In this special feature, we sat down with some of the
            minds behind these courses to explore how these logics shape design
            thinking, creativity, and action. What follows is a roundtable style
            conversation with faculty who are reimagining architectural
            education—from algorithmic design and social equity to material
            experimentation and energy landscapes.
          </p>
        </section>

        <section className={classes.article_section}>
          <div className={classes.article_section_title}>
            <h5>Digital Logic: Building with Code, Craft, and Intuition</h5>
            <small>
              Featuring Ciro Najle, Anna Font, Neslihan Gülhan, Edouard Cabay{" "}
            </small>
          </div>

          <p>
            &quot;We’re not just using AI to generate shapes,&quot; says Anna
            Font. &quot;We’re teaching students how to think critically with
            machines—how to use digital tools to uncover hidden potentials in
            architectural history and material performance.&quot; Digital Logic
            courses like <em>Artificial Intelligence of Doing Architecture</em>{" "}
            and <em>Materiality and Scale</em> invite students to engage
            algorithms as creative partners. Through Midjourney, machine
            learning, and analog protocols, students learn that code is a new
            kind of craft. &quot;The hand-drawn protocols we use aren’t just
            nostalgic,&quot; explains Edouard Cabay. &quot;They’re a
            bridge—connecting bodily action to computational logic. It’s about
            understanding material impacts and resource use through design
            patterns.&quot;
          </p>
        </section>
      </div>
    </div>
  );
};

export default ArticleOne;

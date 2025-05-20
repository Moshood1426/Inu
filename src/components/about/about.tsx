import React from "react";
import classes from "./about.module.scss";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.about_container}>
        <Link href={"/"}>
          <div className={classes.about_back}>
            <IoIosArrowRoundBack />
            <span>Back</span>
          </div>
        </Link>

        <div className={classes.about_title}>
          <h3>Learn More About Us</h3>
          <small>Our Inspiration, community and mission</small>
        </div>

        <section>
          <h5>Welcome to Inu</h5>
          <p>
            Inu is a platform for exploring the ever-evolving world of
            architecture and design. We&apos;re passionate about uncovering the
            stories behind the built environment, from iconic landmarks to
            hidden gems, and sharing them with a community of like-minded
            individuals.{" "}
          </p>
        </section>

        <section>
          <h5>Why the name Inu?</h5>
          <p>
            {" "}
            The Yoruba concept of &quot;inú&quot; is a profound philosophical
            and spiritual idea that extends far beyond its literal translation.
            In Yoruba, inú means “inside” or “inner being”, but it encompasses
            more than just the physical interior—it refers to a person’s inner
            essence, emotions, conscience, character, and moral center.{" "}
          </p>
          <p>
            &quot;Inú,&quot; meaning &quot;inside&quot; in Yoruba, encapsulates
            the essence of this architectural project — a deeper look beyond
            structure and form. Architecture is often viewed only through its
            surface — walls, facades, and materials — but Inú invites us to look
            inward. It reflects the idea that true architecture resides not just
            in what we build, but in how it shapes, reflects, and resonates with
            our inner lives, identities, and collective memory. This project
            explores architecture as a vessel of culture, emotion, and meaning —
            revealing that what’s within is just as vital as what is seen.
          </p>
        </section>

        <section>
          <h5>Our Mission</h5>
          <p>
            At Inu, we believe that architecture has the power to shape our
            experiences, influence our cultures, and impact our planet. Our
            mission is to inspire, educate, and spark meaningful conversations
            about the role of architecture in our lives
          </p>
        </section>

        <section>
          <h5>What You&apos;ll Find Here</h5>
          <ul>
            <li>
              In-depth articles and analysis on architectural trends,
              technologies, and innovations
            </li>
            <li>Stories of remarkable buildings, architects, and designers </li>
            <li>
              Insights into sustainable design, urban planning, and social
              impact{" "}
            </li>
            <li>
              A curated selection of inspiring projects, images, and resource
            </li>
          </ul>
          <p></p>
        </section>

        <section>
          <h5>Our Approach</h5>
          <p>
            We&apos;re committed to fostering a community that values
            creativity, critical thinking, and curiosity. Our content is crafted
            to be informative, engaging, and thought-provoking, with a focus on
            showcasing diverse perspectives and experiences.{" "}
          </p>
        </section>

        <section>
          <h5>Join The Conversation</h5>
          <p>
            Whether you&apos;re an architect, designer, student, or simply
            someone who appreciates the built environment, we invite you to join
            our community. Share your thoughts, ask questions, and let&apos;s
            explore the world of architecture together.
          </p>
        </section>

        <Link href={`/articles`}>
          <div className={classes.about_next}>
            <small>
              LEARN MORE <IoIosArrowRoundForward />
            </small>
            <p>Explore our articles and projects</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;

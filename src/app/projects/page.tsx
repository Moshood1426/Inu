import Socials from "@/components/general/socials/Socials";
import LandingContent from "@/components/landing/content/LandingContent";
import Projects from "@/components/projects/Projects";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="small-landing">
        <Projects />
        <Socials />
      </div>
      <div className="big-landing">
        <LandingContent />
      </div>
    </div>
  );
};

export default page;

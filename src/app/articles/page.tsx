import Articles from "@/components/articles/Articles";
import Socials from "@/components/general/socials/Socials";
import LandingContent from "@/components/landing/content/LandingContent";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="small-landing">
        <Articles />
        <Socials />
      </div>
      <div className="big-landing">
        <LandingContent />
      </div>
    </div>
  );
};

export default page;

import Articles from "@/components/articles/Articles";
import Nav from "@/components/general/nav/Nav";
import Socials from "@/components/general/socials/Socials";
import React from "react";

const page = () => {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <Articles />
      <Socials />
    </div>
  );
};

export default page;

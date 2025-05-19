import About from "@/components/about/about";
import Nav from "@/components/general/nav/Nav";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="nav small-landing">
        <Nav />
      </div>
      <About />
    </div>
  );
};

export default page;

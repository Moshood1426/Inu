import About from "@/components/about/about";
import Nav from "@/components/general/nav/Nav";
import React from "react";

const page = () => {
  return (
    <div className="contact">
      <div className="nav abt_small">
        <Nav />
      </div>
      <About />
    </div>
  );
};

export default page;

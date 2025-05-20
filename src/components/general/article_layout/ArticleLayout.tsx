import React, { ReactNode }  from "react";
import Socials from "../socials/Socials";
import Nav from "../nav/Nav";

interface ArticleLayoutProps {
    children: ReactNode;
  }
  
  const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children }) => {
    return (
      <div>
        <Nav />
        <div>{children}</div>
        <Socials />
      </div>
    );
  };

export default ArticleLayout;

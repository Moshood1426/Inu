import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        textAlign: "center",
        padding: "10vh 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Contact Us Page</h3>
      <Link href={"/"}>
        <button className="btn btn_light">Go Home</button>
      </Link>
    </div>
  );
};

export default page;

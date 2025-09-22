import ContactUs from "@/components/contact_us/ContactUs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="contact">
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          padding: "10vh 0",
        }}
      >
        <ContactUs />
        <Link href={"/"}>
          <button className="btn btn_light btn_full">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default page;

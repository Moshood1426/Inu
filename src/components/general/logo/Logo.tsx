import Link from "next/link";
import classes from "./Logo.module.scss";
import Image from "next/image";
import introIcon from "@/assets/images/office-building.jpg";

const Logo = () => {
  return (
    <Link href={"/"} className={classes.logo}>
      <div>
        <Image
          src={introIcon}
          width={"25"}
          height={"25"}
          alt=""
          className={classes.logo_item_img}
        />
      </div>
      <span>Inu</span>
    </Link>
  );
};

export default Logo;

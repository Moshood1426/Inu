import Link from "next/link";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href={"/"} className={classes.logo}>
      <span>Inu</span>
    </Link>
  );
};

export default Logo;

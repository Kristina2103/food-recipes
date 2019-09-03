import React from "react";
import LogoImg from "../../assets/images/LOGO.png";
import classes from "./Logo.css";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={LogoImg} alt="Logo" />
  </div>
);

export default Logo;

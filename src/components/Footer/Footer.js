import React, { Fragment } from "react";

import classes from "./Footer.css";
import Logo from "../Logo/Logo";
import SocialIcon from "../SocialIcon/SocialIcon";
import FbImg from "../../assets/icons/fb.png";
import InstaImg from "../../assets/icons/insta.png";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.Footer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.SocialIcons}>
          <SocialIcon
            path="https://www.facebook.com"
            img={FbImg}
            alt="Facebook Link"
          />
          <SocialIcon
            path="https://www.instagram.com"
            img={InstaImg}
            alt="Instagram Link"
          />
        </div>
      </div>
      <div className={classes.Copyright}>
        <p>Copyright - Golux Technologies - Kristina Pejčić</p>
      </div>
    </Fragment>
  );
};

export default Footer;

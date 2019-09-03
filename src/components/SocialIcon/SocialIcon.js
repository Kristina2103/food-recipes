import React from "react";

import classes from "./SocialIcon.css";

const SocialIcon = props => {
  return (
    <a href={props.path}>
      <img className={classes.SocialIcon} src={props.img} alt={props.alt} />
    </a>
  );
};

export default SocialIcon;

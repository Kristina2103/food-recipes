import React from "react";

import classes from "./Avatar.css";
const Avatar = props => (
  <span onClick={props.onAvatarClick} className={classes.Avatar}>
    <i className="far fa-user"></i>
  </span>
);

export default Avatar;

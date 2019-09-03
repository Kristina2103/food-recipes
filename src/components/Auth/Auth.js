import React, { Component } from "react";

import classes from "./Auth.css";
import Tooltip from "../UI/Tooltip/Tooltip";
import Avatar from "../Header/Avatar/Avatar";
class Auth extends Component {
  render() {
    return (
      <div className={classes.Auth}>
        <Avatar />
        <Tooltip />
      </div>
    );
  }
}

export default Auth;

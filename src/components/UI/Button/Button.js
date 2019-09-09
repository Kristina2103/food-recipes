import React, { Fragment } from "react";
import classes from "./Button.css";

const Button = props => (
  <Fragment>
    <button
      className={[classes.Button, classes[props.typeButton]].join(" ")}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  </Fragment>
);

export default Button;

import React from "react";
import classes from "./MenuItem.css";

const MenuItem = props => (
  <li className={classes.MenuItem}>
    {/* <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a> */}
    <a href="/">{props.children}</a>
  </li>
);

export default MenuItem;

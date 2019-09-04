import React from "react";
import classes from "./MenuItem.css";
import { NavHashLink as NavLink } from "react-router-hash-link";

const MenuItem = props => (
  <li className={classes.MenuItem}>
    <NavLink to={props.path} smooth={props.smooth} exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;

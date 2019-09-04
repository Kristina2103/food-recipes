import React from "react";
import classes from "./MenuItem.css";
import { NavHashLink as NavLink } from "react-router-hash-link";

const MenuItem = props => {
  let menuItemClasses = [classes.MenuItem];
  props.menuItemClass
    ? menuItemClasses.push(classes.Light)
    : menuItemClasses.push(classes.Dark);

  console.log(props.menuItemClass);
  return (
    <li className={menuItemClasses.join(" ")}>
      <NavLink to={props.path} smooth={props.smooth} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default MenuItem;

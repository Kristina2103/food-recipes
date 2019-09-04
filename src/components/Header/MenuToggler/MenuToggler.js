import React from "react";
import classes from "./MenuToggler.css";

const MenuToggler = props => (
  <div className={classes.MenuToggler} onClick={props.onMenuTogglerClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default MenuToggler;

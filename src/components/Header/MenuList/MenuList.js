import React from "react";

import classes from "./MenuList.css";
import MenuItem from "./MenuItem/MenuItem";
import Auth from "../../Auth/Auth";
const MenuList = props => (
  <ul className={classes.MenuList}>
    <Auth />
    <MenuItem>About Us</MenuItem>
    <MenuItem>Contact</MenuItem>
  </ul>
);

export default MenuList;

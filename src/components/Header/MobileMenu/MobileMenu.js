import React from "react";
import MenuList from "../MenuList/MenuList";
import classes from "./MobileMenu.css";

const MobileMenu = props => {
  let MobileMenuClasses = [classes.Overlay];
  props.isMobileOpen
    ? MobileMenuClasses.push(classes.Open)
    : MobileMenuClasses.push(classes.Close);
  return (
    <div className={MobileMenuClasses.join(" ")}>
      <div className={classes.MobileMenu}>
        <nav className={classes.MobileNav} onClick={props.close}>
          <MenuList isAuth={props.isAuth} />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

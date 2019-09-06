import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { NavHashLink as NavLink } from "react-router-hash-link";

import classes from "./MenuList.css";
import MenuItem from "./MenuItem/MenuItem";
import Auth from "../../Auth/Auth";
import logoImg from "../../../assets/images/LOGO.png";
class MenuList extends Component {
  render() {
    let logged = "";
    let home = "";
    let auth = <Auth />;
    let menuClasses = [classes.MenuList];
    let menuItemClass = this.props.isMobileOpen;
    if (this.props.isMobileOpen) {
      menuClasses.push(classes.Open);
      auth = <img src={logoImg} alt="Logo" className={classes.LogoImg} />;
    }

    if (this.props.location.pathname !== "/")
      home = (
        <MenuItem path="/" exact={true} menuItemClass={menuItemClass}>
          Home
        </MenuItem>
      );
    if (this.props.isAuth)
      logged = (
        <MenuItem path="/myMeals" menuItemClass={menuItemClass}>
          MyMeals
        </MenuItem>
      );

    return (
      <ul className={menuClasses.join(" ")}>
        {auth}
        {home}
        {logged}
        <MenuItem path="#about" smooth={true} menuItemClass={menuItemClass}>
          About Us
        </MenuItem>
        <MenuItem path="#contact" smooth={true} menuItemClass={menuItemClass}>
          Contact
        </MenuItem>
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    isMobileOpen: state.main.isMobileOpen
  };
};
export default withRouter(connect(mapStateToProps)(MenuList));

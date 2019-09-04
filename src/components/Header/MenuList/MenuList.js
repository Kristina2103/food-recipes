import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";

import classes from "./MenuList.css";
import MenuItem from "./MenuItem/MenuItem";
import Auth from "../../Auth/Auth";
class MenuList extends Component {
  render() {
    let logged = "";
    let home = "";
    if (this.props.location.pathname !== "/")
      home = (
        <MenuItem path="/" exact="exact">
          Home
        </MenuItem>
      );
    if (this.props.isAuth)
      logged = <MenuItem path="/my-meals">MyMeals</MenuItem>;
    return (
      <ul className={classes.MenuList}>
        <Auth />
        {home}
        {logged}
        <MenuItem path="#about" smooth={true}>
          About Us
        </MenuItem>
        <MenuItem path="#contact" smooth={true}>
          Contact
        </MenuItem>
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  };
};
export default withRouter(connect(mapStateToProps)(MenuList));

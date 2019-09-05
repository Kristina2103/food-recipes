import React, { Component } from "react";

import SearchBar from "../SearchBar/SearchBar";
import classes from "./Header.css";
import MenuList from "./MenuList/MenuList";
import MenuToggler from "./MenuToggler/MenuToggler";
import Auth from "../Auth/Auth";
class Header extends Component {
  render() {
    return (
      <div className={classes.Fixed}>
        <div className={classes.Header}>
          <SearchBar placeholder="Search recipes" />
          <div className={classes.MobileOnly}>
            <Auth />
            <MenuToggler onMenuTogglerClick={this.props.onMenuTogglerClick} />
          </div>

          <nav className={classes.DesktopOnly}>
            <MenuList />
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";

import SearchBar from "../SearchBar/SearchBar";
import classes from "./Header.css";
import MenuList from "./MenuList/MenuList";
class Header extends Component {
  render() {
    return (
      <div className={classes.Fixed}>
        <div className={classes.Header}>
          <SearchBar />
          <MenuList />
        </div>
      </div>
    );
  }
}

export default Header;

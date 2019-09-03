import React, { Component } from "react";

import classes from "./SearchBar.css";
class SearchBar extends Component {
  render() {
    return (
      <form className={classes.SearchBar}>
        <input type="text" placeholder="Search recipes" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;

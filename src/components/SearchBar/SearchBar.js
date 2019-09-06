import React, { Component } from "react";

import classes from "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <form className={classes.SearchBar} onSubmit={this.props.onFormSubmit}>
        <input
          onChange={this.props.handleChange}
          type="text"
          placeholder={this.props.placeholder}
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;

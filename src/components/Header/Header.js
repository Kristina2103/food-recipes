import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRecipes } from "../../store/actions/index";
import { withRouter } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import classes from "./Header.css";
import MenuList from "./MenuList/MenuList";
import MenuToggler from "./MenuToggler/MenuToggler";
import Auth from "../Auth/Auth";
class Header extends Component {
  state = {
    searchQuery: null
  };
  onSearchBarChange = (e, id) => {
    const value = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        searchQuery: value
      };
    });
  };
  onSearchBarSubmit = e => {
    e.preventDefault();
    this.props.searchRecipes(this.state.searchQuery, this.props.history);
  };
  render() {
    return (
      <div className={classes.Fixed}>
        <div className={classes.Header}>
          <SearchBar
            placeholder="Search recipes"
            handleChange={e => this.onSearchBarChange(e)}
            onFormSubmit={e => this.onSearchBarSubmit(e)}
          />
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

const mapStateToProps = state => {
  return {
    recipesByCategory: state.main.recipesByCategory,
    recommendedRecipe: state.main.recommendedRecipe
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchRecipes: (name, history) => dispatch(searchRecipes(name, history))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);

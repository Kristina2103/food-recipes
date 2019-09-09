import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRecipes } from "../../store/actions/index";
import { withRouter } from "react-router-dom";

import classes from "./Header.css";
import MenuList from "./MenuList/MenuList";
import MenuToggler from "./MenuToggler/MenuToggler";
import Auth from "../Auth/Auth";
import SearchForm from "../Forms/SearchForm";
class Header extends Component {
  onSearchBarSubmit = value => {
    this.props.history.push(`/search/${value.term}`);
    this.props.searchRecipes(value.term);
  };
  render() {
    return (
      <div className={classes.Fixed}>
        <div className={classes.Header}>
          <SearchForm onSubmit={this.onSearchBarSubmit} />
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
    searchRecipes: name => dispatch(searchRecipes(name))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);

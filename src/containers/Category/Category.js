import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import classes from "./Category.css";

import Spinner from "../../components/UI/Spinner/Spinner";
import List from "../../components/Recipes/List/List";
import SearchBar from "../../components/SearchBar/SearchBar";
import Recommended from "../../components/Recipes/Recommended/Recommended";

class Category extends Component {
  componentDidMount() {
    this.props.getRecipesByCategory(this.props.match.params.name);
  }

  handleSearchBarChange = e => {
    let currentList = this.props.recipesByCategory;
    let filteredList = [];
    if (e.target.value !== "") {
      filteredList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      filteredList = this.props.recipesByCategory;
    }
    return this.props.updateRecipeListBySearch(filteredList);
  };
  render() {
    let content = <Spinner />;
    if (this.props.recipesByCategory) {
      content = (
        <Fragment>
          <section className={classes.First}>
            <h1>{this.props.match.params.name}</h1>
            <div className={classes.Hero}>
              <Recommended />
              <div className={classes.SearchBar}>
                <SearchBar
                  handleChange={e => this.handleSearchBarChange(e)}
                  placeholder="Search meals"
                />
              </div>
            </div>
          </section>
          <hr />
          <section>
            <List
              listType="recipesByCategory"
              listStyle="Light"
              itemsPerRow="3"
              param="id"
              onImageClickPath="singleMeal"
            />
          </section>
        </Fragment>
      );
    }

    return <div className={classes.Category}>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    recipesByCategory: state.main.recipesByCategory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRecipesByCategory: name => dispatch(actions.getRecipesByCategory(name)),
    updateRecipeListBySearch: filteredList =>
      dispatch(actions.updateRecipeListBySearch(filteredList))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category)
);

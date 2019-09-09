import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { updatedGlobalSearch, searchRecipes } from "../../store/actions/index";
import classes from "./Search.css";

import List from "../../components/Recipes/List/List";
import Recommended from "../../components/Recipes/Recommended/Recommended";
import CategoryFilterForm from "../../components/Forms/CategoryFilterForm";

class Search extends Component {
  componentDidMount() {
    //If page is refreshed and global state is empty, get data by query param
    if (!this.props.globalSearchResult) {
      this.props.searchRecipes(this.props.match.params.term);
    }
  }

  //On change category select input, filter recipes by selected category
  filterBycategory = category => {
    let currentList = this.props.globalSearchResult;
    let filteredList = [];
    //If some category is selected, return only recipes that belongs to selected category or
    //if no category is selected, return all recipes for serch term
    if (category !== "0") {
      filteredList = currentList.filter(item => item.category === category);
    } else {
      filteredList = this.props.globalSearchResult;
    }
    return this.props.updatedGlobalSearch(filteredList);
  };
  //Get category properties from search result and remove duplicate category names
  getCategoryList = recipes => {
    const category = Object.keys(recipes).map(item => recipes[item].category);
    //remove duplicates
    return [...new Set(category)];
  };
  render() {
    let searchResults = <p>No search results</p>;
    let categoryList = null;
    if (this.props.searchError) searchResults = <p>Invalid search term</p>;
    if (this.props.updatedSearchResults) {
      //List of search results categories
      categoryList = this.getCategoryList(this.props.globalSearchResult);
      searchResults = (
        <section>
          <List
            listType="searchList"
            listStyle="Light"
            itemsPerRow="3"
            param="id"
            onImageClickPath="singleMeal"
            data={this.props.updatedSearchResults}
          />
        </section>
      );
    }

    return (
      <div className={classes.Category}>
        <Fragment>
          <section className={classes.First}>
            <h1>{this.props.match.params.name}</h1>
            <div className={classes.Hero}>
              <Recommended />
              <div className={classes.SearchBar}></div>
            </div>
          </section>
          <div className={classes.CategoryFilter}>
            <CategoryFilterForm
              onChange={values => this.filterBycategory(values.category)}
              options={categoryList}
            />
          </div>
          <hr />
          {searchResults}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    globalSearchResult: state.search.globalSearchResult,
    updatedSearchResults: state.search.updatedSearchResults,
    searchError: state.search.searchError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatedGlobalSearch: name => dispatch(updatedGlobalSearch(name)),
    searchRecipes: name => dispatch(searchRecipes(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

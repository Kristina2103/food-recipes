import React, { Component } from "react";
import { connect } from "react-redux";
import { updatedGlobalSearch } from "../../store/actions/index";
import classes from "./Search.css";

import Input from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";
import List from "../../components/Recipes/List/List";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Recommended from "../../components/Recipes/Recommended/Recommended";

class Search extends Component {
  state = {
    categoryValue: "",
    updatedGlobalSearch: null
  };

  onCategoryChange = e => {
    this.filterBycategory(e.target.value);
  };
  filterBycategory = category => {
    console.log(category);
    let currentList = this.props.globalSearchResult;
    let filteredList = [];
    if (category !== "") {
      filteredList = currentList.filter(item => item.category === category);
    } else {
      filteredList = this.props.globalSearchResult;
    }

    return this.props.updatedGlobalSearch(filteredList);
  };
  transformData = data => {
    const category = Object.keys(data).map(item => data[item].category);
    return [...new Set(category)];
  };
  render() {
    let content = <Spinner />;
    let toTransform = null;
    let uniqCatList = null;
    if (this.props.globalSearchResult) {
      toTransform = this.props.globalSearchResult;
      uniqCatList = this.transformData(toTransform);
      content = (
        <Auxiliary>
          <section className={classes.First}>
            <h1>{this.props.match.params.name}</h1>
            <div className={classes.Hero}>
              <Recommended />
              <div className={classes.SearchBar}></div>
            </div>
          </section>
          <div className={classes.CategoryFilter}>
            <Input
              value={this.state.categoryValue}
              elementType="select"
              onInputChange={e => this.onCategoryChange(e)}
              options={uniqCatList}
              placeholder="Category"
            />
          </div>
          <hr />
          <section>
            <List
              listType="globalSearchResult"
              listStyle="Light"
              itemsPerRow="3"
              param="id"
              onImageClickPath="singleMeal"
              data={this.state.updatedGlobalSearch}
            />
          </section>
        </Auxiliary>
      );
    }

    return <div className={classes.Category}>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    globalSearchResult: state.main.globalSearchResult
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatedGlobalSearch: name => dispatch(updatedGlobalSearch(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./List.css";
import ListItem from "./ListItem/ListItem";
import { withRouter } from "react-router-dom";
class List extends Component {
  onListImageClick = param => {
    this.props.history.push(`/${this.props.onImageClickPath}/${param}`);
  };
  render() {
    let obj = "";
    if (this.props.filteredList) {
      obj = this.props.filteredList;
    } else if (this.props.listType === "similarMeal") {
      obj = this.props.data;
    } else obj = this.props[this.props.listType];
    let list = null;
    if (obj) {
      list = Object.values(obj).map(el => {
        return (
          <ListItem
            {...el}
            listStyle={this.props.listStyle}
            itemsPerRow={this.props.itemsPerRow}
            key={el.id}
            onListImageClick={() => this.onListImageClick(el[this.props.param])}
          />
        );
      });
    }

    return <div className={classes.List}>{list}</div>;
  }
}
const mapStateToProps = state => {
  return {
    category: state.main.categoryList,
    recipesByCategory: state.main.recipesByCategory,
    filteredList: state.main.updateRecipeListBySearch
  };
};

export default withRouter(connect(mapStateToProps)(List));

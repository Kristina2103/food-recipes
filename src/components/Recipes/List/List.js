import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import classes from "./List.css";
import ListItem from "./ListItem/ListItem";
import { withRouter } from "react-router-dom";
class List extends Component {
  onListImageClick = (id, name) => {
    const funcName = "get" + this.props.listType + "Item";
    const history = this.props.history;
    this.props[funcName](id, history, name);
    // this.props.getcategoryListItem(id, history);
  };
  render() {
    const list = Object.values(this.props[this.props.listType]).map(el => {
      return (
        <ListItem
          {...el}
          key={el.id}
          onListImageClick={() => this.onListImageClick(el.id, el.name)}
        />
      );
    });
    return <div className={classes.List}>{list}</div>;
  }
}
const mapStateToProps = state => {
  return {
    categoryList: state.main.categoryList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getcategoryListItem: (id, history, name) =>
      dispatch(actions.openCategoryPage(id, history, name))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)
);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import Spinner from "../../UI/Spinner/Spinner";
import List from "../List/List";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class SimilarMeals extends Component {
  state = {
    list: null
  };
  componentDidMount() {
    this.props.getRecipesByCategory(this.props.category, this.props.numOfItems);
  }
  render() {
    let content = <Spinner />;
    if (this.props.recipesByCategory) {
      content = (
        <Auxiliary>
          <List
            listType="recipesByCategory"
            listStyle="Light"
            itemsPerRow="3"
            param="id"
            onImageClickPath="singleMeal"
          />
        </Auxiliary>
      );
    }

    return <div>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    recipesByCategory: state.main.recipesByCategory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRecipesByCategory: (name, numOfItems) =>
      dispatch(actions.getRecipesByCategory(name, numOfItems))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarMeals);

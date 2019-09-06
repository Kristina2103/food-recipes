import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import classes from "./Recommended.css";
import ListItem from "../List/ListItem/ListItem";
import { getRecommendedRecipe } from "../../../store/actions/index";

class Recommended extends Component {
  componentDidMount() {
    this.props.getRecommendedRecipe();
  }
  onRecommendedClick = id => {
    this.props.history.push(`/singleMeal/${id}`);
  };
  render() {
    return (
      <div className={classes.Recommended}>
        <p>Our recommendation</p>
        <ListItem
          onListImageClick={() =>
            this.onRecommendedClick(this.props.recommendedRecipe.idMeal)
          }
          listStyle="Light"
          img={this.props.recommendedRecipe.strMealThumb}
          name={this.props.recommendedRecipe.strMeal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommendedRecipe: state.main.recommendedRecipe
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRecommendedRecipe: () => dispatch(getRecommendedRecipe())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Recommended)
);

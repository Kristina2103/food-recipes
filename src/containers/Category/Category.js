import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import classes from "./Category.css";

import Spinner from "../../components/UI/Spinner/Spinner";
import List from "../../components/Recipes/List/List";
import ListItem from "../../components/Recipes/List/ListItem/ListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import axios from "axios";

class Category extends Component {
  componentDidMount() {
    this.props.getRecipesByCategory(this.props.match.params.name);
    this.props.getRecommendedRecipe();
  }

  onRecommendedClick = id => {
    alert(id);
  };
  handleChange = e => {
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
        <Auxiliary>
          <section className={classes.First}>
            <h1>{this.props.match.params.name}</h1>
            <div className={classes.Hero}>
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
              <div className={classes.SearchBar}>
                <SearchBar
                  handleChange={e => this.handleChange(e)}
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
        </Auxiliary>
      );
    }

    return <div className={classes.Category}>{content}</div>;
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
    getRecipesByCategory: name => dispatch(actions.getRecipesByCategory(name)),
    getRecommendedRecipe: () => dispatch(actions.getRecommendedRecipe()),
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

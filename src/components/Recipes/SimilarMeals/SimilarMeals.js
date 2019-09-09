import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import Spinner from "../../UI/Spinner/Spinner";
import List from "../List/List";
import axios from "axios";

class SimilarMeals extends Component {
  state = {
    list: null
  };
  componentDidMount() {
    axios
      .all([
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      ])
      .then(res => {
        const response = res.map(el => {
          return { ...el.data.meals[0] };
        });
        const list = Object.values(response).map(el => {
          let obj = {};
          return {
            ...obj,
            name: el.strMeal,
            img: el.strMealThumb,
            id: el.idMeal,
            category: el.strCategory,
            country: el.strArea
          };
        });
        this.setState({ list: list });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let content = <Spinner />;
    if (this.state.list) {
      content = (
        <Fragment>
          <List
            listType="similarMeal"
            listStyle="Light"
            itemsPerRow="3"
            param="id"
            onImageClickPath="singleMeal"
            data={this.state.list}
          />
        </Fragment>
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

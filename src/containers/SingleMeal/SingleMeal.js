import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./SingleMeal.css";
import SimilarMeals from "../../components/Recipes/SimilarMeals/SimilarMeals";
class SingleMeal extends Component {
  componentDidMount() {
    this.props.getSingleMeal(this.props.match.params.id);
  }
  filterDataByKeyName = (string, obj) => {
    const data = Object.keys(obj)
      .filter(item => {
        return item.includes(string) === true && obj[item] !== "";
      })
      .map(item => obj[item]);
    return data;
  };

  render() {
    const meal = this.props.singleMeal;
    let content = <Spinner />;

    if (meal) {
      //Prepare data for ingredients table
      const ingredients = this.filterDataByKeyName("strIngredient", meal);
      const measure = this.filterDataByKeyName("strMeasure", meal);
      const row = Object.keys(ingredients).map(key => {
        return (
          <tr key={key}>
            <td>{ingredients[key]}</td>
            <td>{measure[key]}</td>
          </tr>
        );
      });
      content = (
        <Auxiliary>
          <section className={classes.First}>
            <div className={classes.Hero}>
              <h1>{meal.strMeal}</h1>
              <p className={classes.Tag}>#{meal.strTags}</p>
            </div>
            <div className={classes.Hero}>
              <div className={classes.Image}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div className={classes.Details}>
                <ul>
                  <li>
                    <span className={classes.Bold}>Category: </span>
                    {meal.strCategory}
                  </li>
                  <li>
                    <span className={classes.Bold}>Country: </span>
                    {meal.strArea}
                  </li>
                  <li>
                    <span className={classes.Bold}>Video: </span>
                    {meal.strYoutube}
                  </li>
                </ul>
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          </section>
          <section className={classes.Ingredients}>
            <table>
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>{row}</tbody>
            </table>
          </section>
          <section className={classes.SimilarRecipes}>
            <SimilarMeals
              category={this.props.singleMeal.strCategory}
              numOfItems="3"
            />
          </section>
        </Auxiliary>
      );
    }
    return <div>{content}</div>;
  }
}
const mapStateToProps = state => {
  return {
    singleMeal: state.main.singleMeal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSingleMeal: id => dispatch(actions.getSingleMeal(id)),
    getRecipesByCategory: name => dispatch(actions.getRecipesByCategory(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMeal);

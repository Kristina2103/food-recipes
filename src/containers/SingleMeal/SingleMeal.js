import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./SingleMeal.css";
class SingleMeal extends Component {
  componentDidMount() {
    this.props.getSingleMeal(this.props.match.params.id);
  }
  render() {
    const meal = this.props.singleMeal;
    let content = <Spinner />;
    if (meal)
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
        </Auxiliary>
      );
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
    getSingleMeal: id => dispatch(actions.getSingleMeal(id))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMeal)
);

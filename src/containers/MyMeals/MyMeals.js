import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import classes from "./MyMeals.css";
import SimilarMeals from "../../components/Recipes/SimilarMeals/SimilarMeals";
class MyMeals extends Component {
  render() {
    if (this.props.isAuth) {
      return (
        <Fragment>
          <section className={classes.First}>
            <h1>My Meals</h1>
            <SimilarMeals category={"Beef"} />
          </section>
        </Fragment>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps)(MyMeals);

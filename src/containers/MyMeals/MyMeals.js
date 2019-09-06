import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import classes from "./MyMeals.css";
import SimilarMeals from "../../components/Recipes/SimilarMeals/SimilarMeals";
class MyMeals extends Component {
  render() {
    if (this.props.isAuth) {
      return (
        <Auxiliary>
          <section className={classes.First}>
            <h1>My Meals</h1>
            <SimilarMeals category={"Beef"} />
          </section>
        </Auxiliary>
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

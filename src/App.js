import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import FoodRecipes from "./containers/FoodRecipes/FoodRecipes";
import Category from "./containers/Category/Category";
import MyMeals from "./containers/MyMeals/MyMeals";
import Search from "./containers/Search/Search";
import SingleMeal from "./containers/SingleMeal/SingleMeal";
import { connect } from "react-redux";

import "./App.css";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    let protectedRoutes = "";
    if (this.props.isAuth)
      protectedRoutes = <Route path="/my-meals" component={SingleMeal} />;
    return (
      <div className="App">
        <Layout>
          <Switch>
            {protectedRoutes}
            <Route path="/single-meal" component={MyMeals} />
            <Route path="/category/:name" component={Category} />
            <Route path="/search-recipes" component={Search} />
            <Route path="/" exact component={FoodRecipes} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  };
};
export default withRouter(connect(mapStateToProps)(App));

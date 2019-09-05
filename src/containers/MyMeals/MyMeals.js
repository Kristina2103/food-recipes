import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import classes from "./MyMeals.css";
class MyMeals extends Component {
  componentDidMount() {
    // this.props.getSingleRecipe(this.props.match.params.id);
  }
  render() {
    return <div>MyMeals</div>;
  }
}
// const mapStateToProps = state => {
//   return {
//     singleRecipe: state.main.singleRecipe
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     getSingleRecipe: id => dispatch(actions.getSingleRecipe(id))
//   };
// };
// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(MyMeals)
// );
export default MyMeals;

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import classes from "./Auth.css";
import Tooltip from "../UI/Tooltip/Tooltip";
import Avatar from "../Header/Avatar/Avatar";
import Button from "../UI/Button/Button";
import LoginForm from "../Forms/LoginForm";
class Auth extends Component {
  //Show or hide login/logout tooltip on avatar click
  onAvatarClick = () => {
    this.props.toggleLoginTooltip();
  };
  //Handle login form submit
  submit = values => {
    return this.props.logIn(values.email, values.pass);
  };
  render() {
    //Tooltip for login
    let tooltip = (
      <Tooltip opened={this.props.isTooltipOpened}>
        <LoginForm onSubmit={this.submit} />
      </Tooltip>
    );
    //Tooltip for logout
    if (this.props.isAuth)
      tooltip = (
        <Tooltip opened={this.props.isTooltipOpened}>
          <h3>You are successfully logged in!</h3>
          <Button typeButton="Success" clicked={this.props.logOut}>
            Logout
          </Button>
        </Tooltip>
      );
    return (
      <div className={classes.Auth}>
        <Avatar onAvatarClick={this.onAvatarClick} />
        {tooltip}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    wrongCredentials: state.auth.wrongCredentials,
    isTooltipOpened: state.auth.isTooltipOpened
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logIn: (email, pass) => dispatch(actions.logIn(email, pass)),
    logInFailed: () => dispatch(actions.logInFailed()),
    logOut: () => dispatch(actions.logOut()),
    toggleLoginTooltip: () => dispatch(actions.toggleLoginTooltip())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

import classes from "./Auth.css";
import Tooltip from "../UI/Tooltip/Tooltip";
import Avatar from "../Header/Avatar/Avatar";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
class Auth extends Component {
  state = {
    auth: {
      email: {
        value: "",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail"
        }
      },
      password: {
        value: "",
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        }
      }
    }
  };
  onInputChange = (e, id) => {
    const value = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        auth: {
          ...prevState.auth,
          [id]: {
            ...prevState.auth[id],
            value: value
          }
        }
      };
    });
  };
  onAvatarClick = () => {
    this.props.toggleLoginTooltip();
  };

  onFormSubmit = e => {
    e.preventDefault();
    const email = this.state.auth.email.value;
    const pass = this.state.auth.password.value;
    if (email === "admin@admin.com" && pass === "admin123") {
      return this.props.logInSuccess(email, pass);
    } else {
      return this.props.logInFailed();
    }
  };

  render() {
    let wrongCredentialsMsg = "";
    if (this.props.wrongCredentials)
      wrongCredentialsMsg = "Email: admin@admin.com Pass: admin123";
    const inputs = Object.keys(this.state.auth).map(el => {
      return (
        <Input
          key={el}
          value={this.state.auth[el].value}
          onInputChange={e => this.onInputChange(e, el)}
          elementConfig={this.state.auth[el].elementConfig}
        />
      );
    });
    let tooltip = (
      <Tooltip opened={this.props.isTooltipOpened}>
        <form onSubmit={this.onFormSubmit}>
          {inputs}
          <p className={classes.ErrorMsg}>{wrongCredentialsMsg}</p>
          <Button typeButton="Primary">Submit</Button>
        </form>
      </Tooltip>
    );
    if (this.props.isAuth)
      tooltip = (
        <Tooltip opened={this.props.isTooltipOpened}>
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
    isAuth: state.isAuth,
    wrongCredentials: state.wrongCredentials,
    isTooltipOpened: state.isTooltipOpened
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logInSuccess: (email, pass) => dispatch(actions.logInSuccess(email, pass)),
    logInFailed: () => dispatch(actions.logInFailed()),
    logOut: () => dispatch(actions.logOut()),
    toggleLoginTooltip: () => dispatch(actions.toggleLoginTooltip())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

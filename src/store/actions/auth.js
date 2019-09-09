import * as actionTypes from "./actionTypes";

export const logIn = (email, pass) => {
  return dispatch => {
    dispatch(logInSuccess(email, pass));
    setTimeout(function() {
      dispatch(toggleLoginTooltip());
    }, 1000);
  };
};
const logInSuccess = (email, pass) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    email,
    pass
  };
};
export const logInFailed = () => {
  return {
    type: actionTypes.LOGIN_FAILED
  };
};
export const logOut = () => {
  return dispatch => {
    setTimeout(function() {
      dispatch(toggleLoginTooltip());
    }, 1000);
    dispatch({ type: actionTypes.LOGOUT });
  };
};
export const toggleLoginTooltip = () => {
  return {
    type: actionTypes.TOGGLE_LOGIN_TOOLTIP
  };
};

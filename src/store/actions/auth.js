import * as actionTypes from "./actionTypes";

export const logInSuccess = (email, pass) => {
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
  return {
    type: actionTypes.LOGOUT
  };
};
export const toggleLoginTooltip = () => {
  return {
    type: actionTypes.TOGGLE_LOGIN_TOOLTIP
  };
};

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  wrongCredentials: false,
  isTooltipOpened: false,
  isMobileOpen: true
};
const logInSuccess = state => {
  return {
    ...state,
    isAuth: true,
    wrongCredentials: false
  };
};
const loginFailed = state => {
  return {
    ...state,
    wrongCredentials: true
  };
};
const toggleLoginTooltip = state => {
  return {
    ...state,
    isTooltipOpened: !state.isTooltipOpened
  };
};
const logout = state => {
  return {
    ...state,
    isAuth: false
  };
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return logInSuccess(state);
    case actionTypes.LOGIN_FAILED:
      return loginFailed(state);
    case actionTypes.TOGGLE_LOGIN_TOOLTIP:
      return toggleLoginTooltip(state);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};
export default authReducer;

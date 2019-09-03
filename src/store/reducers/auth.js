import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  wrongCredentials: false,
  isTooltipOpened: false
};
const logInSuccess = state => {
  return {
    ...state,
    isAuth: true,
    wrongCredentials: false,
    isTooltipOpened: false
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
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return logInSuccess(state);
    case actionTypes.LOGIN_FAILED:
      return loginFailed(state);
    case actionTypes.TOGGLE_LOGIN_TOOLTIP:
      return toggleLoginTooltip(state);
    default:
      return state;
  }
};
export default authReducer;

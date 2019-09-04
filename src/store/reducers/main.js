import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isMobileOpen: false
};
const toggleMobileMenu = state => {
  return {
    ...state,
    isMobileOpen: !state.isMobileOpen
  };
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MOBILE_MENU:
      return toggleMobileMenu(state);
    default:
      return state;
  }
};
export default mainReducer;

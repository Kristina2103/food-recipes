import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isMobileOpen: false,
  categoryList: [],
  errorCategory: false
};
const toggleMobileMenu = state => {
  return {
    ...state,
    isMobileOpen: !state.isMobileOpen
  };
};
const getCategoryListSuccess = (state, action) => {
  const categories = Object.values(action.categories).map(el => {
    let obj = {};
    return {
      ...obj,
      name: el.strCategory,
      img: el.strCategoryThumb,
      id: el.idCategory
    };
  });
  return {
    ...state,
    categoryList: categories
  };
};
const getCategoryListFailed = state => {
  return {
    ...state,
    errorCategory: true
  };
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MOBILE_MENU:
      return toggleMobileMenu(state);
    case actionTypes.GET_CATEGORY_LIST_SUCCESS:
      return getCategoryListSuccess(state, action);
    case actionTypes.GET_CATEGORY_LIST_FAILED:
      return getCategoryListFailed(state);
    default:
      return state;
  }
};
export default mainReducer;

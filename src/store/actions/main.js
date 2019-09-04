import * as actionTypes from "./actionTypes";
import axios from "axios";

export const toggleMobileMenu = () => {
  return {
    type: actionTypes.TOGGLE_MOBILE_MENU
  };
};
export const getCategoryList = () => {
  return dispatch => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => {
        dispatch(getCategoryListSuccess(res.data.categories));
      })
      .catch(err => {
        dispatch(getCategoryListFailed());
      });
  };
};
export const openCategoryPage = (id, history, name) => {
  history.push(`/category/${name}`);
  return dispatch => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then(res => console.log(res));
  };
};

export const getCategoryListSuccess = categories => {
  return {
    type: actionTypes.GET_CATEGORY_LIST_SUCCESS,
    categories
  };
};
export const getCategoryListFailed = errorMsg => {
  return {
    type: actionTypes.GET_CATEGORY_LIST_FAILED
  };
};

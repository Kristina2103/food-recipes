import * as actionTypes from "./actionTypes";
import axios from "axios";

export const toggleMobileMenu = () => {
  return {
    type: actionTypes.TOGGLE_MOBILE_MENU
  };
};

//Get recipes by category
export const getRecipesByCategory = name => {
  return dispatch => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then(res => {
        dispatch(getRecipesByCategorySuccess(res.data.meals));
      });
  };
};
export const getRecipesByCategorySuccess = meals => {
  return {
    type: actionTypes.GET_RECIPES_BY_CATEGORY_SUCCESS,
    meals
  };
};
//Search Recipes
export const updateRecipeListBySearch = data => {
  return {
    type: actionTypes.UPDATE_RECIPE_LIST_BY_SEARCH,
    filteredList: data
  };
};
// Get single recipe details
export const getSingleMeal = id => {
  return dispatch => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => dispatch(getSingleMealSuccess(res.data.meals[0])));
  };
};
const getSingleMealSuccess = singleMeal => {
  return {
    type: actionTypes.GET_SINGLE_MEAL_SUCCESS,
    singleMeal
  };
};
//Get category list
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
//Get recommended recipe
export const getRecommendedRecipe = () => {
  return dispatch => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => dispatch(getRecommendedRecipeSuccess(res.data.meals[0])));
  };
};
const getRecommendedRecipeSuccess = recommendedRecipe => {
  return {
    type: actionTypes.GET_RECOMMENDED_RECIPE_SUCCESS,
    recommendedRecipe
  };
};

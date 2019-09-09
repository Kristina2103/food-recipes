import * as actionTypes from "./actionTypes";
import axios from "axios";

export const updateRecipeListBySearch = data => {
  return {
    type: actionTypes.UPDATE_RECIPE_LIST_BY_SEARCH,
    filteredList: data
  };
};
// Search recipes
export const searchRecipes = query => {
  return dispatch => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => dispatch(searchRecipesSuccess(res.data.meals)))
      .catch(err => dispatch(searchRecipesFailed(err)));
  };
};
export const searchRecipesSuccess = meals => {
  return {
    type: actionTypes.SEARCH_RECIPES_SUCCESS,
    meals: meals
  };
};
export const searchRecipesFailed = err => {
  return {
    type: actionTypes.SEARCH_RECIPES_FAILED
  };
};
export const updatedGlobalSearch = data => {
  return {
    type: actionTypes.UPDATED_GLOABAL_SEARCH,
    data
  };
};

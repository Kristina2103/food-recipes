import * as actionTypes from "../actions/actionTypes";

const initialState = {
  updateRecipeListBySearch: null,
  globalSearchResult: null,
  updatedSearchResults: null,
  searchError: false
};

const updateRecipeListBySearch = (state, action) => {
  return {
    ...state,
    updateRecipeListBySearch: action.filteredList
  };
};

const searchRecipesSuccess = (state, action) => {
  const recipes = Object.values(action.meals).map(el => {
    let obj = {};
    return {
      ...obj,
      name: el.strMeal,
      img: el.strMealThumb,
      id: el.idMeal,
      category: el.strCategory,
      country: el.strArea
    };
  });
  return {
    ...state,
    searchError: false,
    globalSearchResult: recipes,
    updatedSearchResults: recipes
  };
};
const searchRecipesFailed = state => {
  return {
    ...state,
    searchError: true
  };
};
export const updatedGlobalSearch = (state, action) => {
  return {
    ...state,
    updatedSearchResults: action.data
  };
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RECIPE_LIST_BY_SEARCH:
      return updateRecipeListBySearch(state, action);
    case actionTypes.SEARCH_RECIPES_SUCCESS:
      return searchRecipesSuccess(state, action);
    case actionTypes.SEARCH_RECIPES_FAILED:
      return searchRecipesFailed(state);
    case actionTypes.UPDATED_GLOABAL_SEARCH:
      return updatedGlobalSearch(state, action);

    default:
      return state;
  }
};
export default mainReducer;

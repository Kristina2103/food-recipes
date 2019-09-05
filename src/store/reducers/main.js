import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isMobileOpen: false,
  categoryList: [],
  errorCategory: false,
  recipesByCategory: [],
  recommendedRecipe: [],
  updateRecipeListBySearch: null
};
const toggleMobileMenu = state => {
  return {
    ...state,
    isMobileOpen: !state.isMobileOpen
  };
};
//Category
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

//RECIPES
const getRecipesByCategorySuccess = (state, action) => {
  const recipesByCategory = Object.values(action.meals).map(el => {
    let obj = {};
    return {
      ...obj,
      name: el.strMeal,
      img: el.strMealThumb,
      id: el.idMeal
    };
  });
  console.log(recipesByCategory);
  return {
    ...state,
    recipesByCategory: recipesByCategory
  };
};
const getRecommendedRecipe = (state, action) => {
  return {
    ...state,
    recommendedRecipe: action.recommendedRecipe
  };
};
const updateRecipeListBySearch = (state, action) => {
  return {
    ...state,
    updateRecipeListBySearch: action.filteredList
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
    case actionTypes.GET_RECIPES_BY_CATEGORY_SUCCESS:
      return getRecipesByCategorySuccess(state, action);
    case actionTypes.GET_RECOMMENDED_RECIPE_SUCCESS:
      return getRecommendedRecipe(state, action);
    case actionTypes.UPDATE_RECIPE_LIST_BY_SEARCH:
      return updateRecipeListBySearch(state, action);
    default:
      return state;
  }
};
export default mainReducer;

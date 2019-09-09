import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isMobileOpen: false,
  categoryList: [],
  errorCategory: false,
  recipesByCategory: [],
  recommendedRecipe: [],
  updateRecipeListBySearch: null,
  singleMeal: null,
  globalSearchResult: null,
  updatedSearchResults: null,
  searchError: false
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
      id: el.idMeal,
      category: el.strCategory,
      country: el.strArea
    };
  });
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
const getSingleMeal = (state, action) => {
  return {
    ...state,
    singleMeal: action.singleMeal
  };
};
// const searchRecipesSuccess = (state, action) => {
//   const recipes = Object.values(action.meals).map(el => {
//     let obj = {};
//     return {
//       ...obj,
//       name: el.strMeal,
//       img: el.strMealThumb,
//       id: el.idMeal,
//       category: el.strCategory,
//       country: el.strArea
//     };
//   });
//   return {
//     ...state,
//     searchError: false,
//     globalSearchResult: recipes,
//     updatedSearchResults: recipes
//   };
// };
// const searchRecipesFailed = state => {
//   return {
//     ...state,
//     searchError: true
//   };
// };
// export const updatedGlobalSearch = (state, action) => {
//   return {
//     ...state,
//     updatedSearchResults: action.data
//   };
// };
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
    case actionTypes.GET_SINGLE_MEAL_SUCCESS:
      return getSingleMeal(state, action);
    // case actionTypes.SEARCH_RECIPES_SUCCESS:
    //   return searchRecipesSuccess(state, action);
    // case actionTypes.SEARCH_RECIPES_FAILED:
    //   return searchRecipesFailed(state);
    // case actionTypes.UPDATED_GLOABAL_SEARCH:
    //   return updatedGlobalSearch(state, action);

    default:
      return state;
  }
};
export default mainReducer;

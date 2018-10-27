import {
  RECIPES_CALL,
  INPUT_DATA,
  RESET_STATE,
  IS_LOADING,
  HAS_ERRORED,
  RECIPE_CALL,
  RECIPE_SUM
} from '../actions/actionTypes';

const defaultState = {
  recipes: [],
  recipeInfo: {},
  recipeSum: '',
  searchData: '',
  recipeInput: '',
  recipeStyle: '',
  loading: false,
  error: null
};

const ApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return {
        ...state,
        recipes: []
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    case INPUT_DATA:
      return {
        ...state,
        recipeInput: action.recipeInput,
        recipeStyle: action.recipeStyle
      };
    case RECIPES_CALL:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload], // uses babel object spread operator
        searchData: action.payloadInfo,
        loading: false
      };
    case RECIPE_CALL:
      return {
        ...state,
        recipeInfo: action.payload,
        loading: false
      };
    case RECIPE_SUM:
      return {
        ...state,
        recipeSum: action.payload,
        loading: false
      };
    case HAS_ERRORED:
      return {
        ...state,
        loading: false,
        error: action.payloadError
      };
    default:
      return state;
  }
};

export default ApiReducer;

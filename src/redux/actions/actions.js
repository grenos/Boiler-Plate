import {
  RECIPES_CALL,
  INPUT_DATA,
  RESET_STATE,
  IS_LOADING,
  HAS_ERRORED,
  RECIPE_CALL,
  RECIPE_SUM
} from './actionTypes';

import axios from 'axios';
import { RateLimiter } from 'limiter';
import { push } from 'react-router-redux';

const recipe = new RateLimiter(5, 'day');
const recipes = new RateLimiter(5, 'day');
const recipeSum = new RateLimiter(5, 'day');

//! get all recipes
export const searchRecipes = ({
  recipeInput = '',
  recipeStyle = '',
  offset = 0
}) => dispatch => {
  //
  recipe.removeTokens(1, (error, remainingRequests) => {
    error = 'Too many Api calls. Please wait...';
    const rate = remainingRequests;
    localStorage.setItem('DO_NOT_DELETE_01', rate);
    //
    const controlRate = JSON.parse(localStorage.getItem('DO_NOT_DELETE_01'));
    if (controlRate < 1) {
      console.log(error);
      dispatch(push(`/network-error`));
      //
    } else {
      dispatch(callIsLoading());

      axios
        .get(
          `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${recipeStyle}&instructionsRequired=true&limitLicense=false&number=10&offset=${offset}&query=${recipeInput}`,
          {
            headers: {
              'X-Mashape-Key': API_KEY,
              Accept: 'application/json'
            }
          }
        )
        .then(res => {
          dispatch(getRecipesData(res));
        })
        .then(() => {
          let noSpaceUri = recipeInput.replace(/\s+/g, '-');
          dispatch(push(`/recipes/${noSpaceUri}`));
        })
        .catch(err => {
          dispatch(push(`/NotFound`));
          dispatch(callHasErrored(err));
        });
    }
  });
};

//! get individual recipe details
export const searchRecipeInfo = ({ id, title }) => dispatch => {
  //
  recipes.removeTokens(1, (error, remainingRequests) => {
    error = 'Too many Api calls. Please wait...';
    const rate = remainingRequests;
    localStorage.setItem('DO_NOT_DELETE_02', rate);
    //
    const controlRate = JSON.parse(localStorage.getItem('DO_NOT_DELETE_02'));
    if (controlRate < 1) {
      console.log(error);
      dispatch(push(`/network-error`));
    } else {
      dispatch(callIsLoading());
      axios
        .get(
          `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information?includeNutrition=false`,
          {
            headers: {
              'X-Mashape-Key': API_KEY,
              Accept: 'application/json'
            }
          }
        )
        .then(res => {
          dispatch(getRecipeData(res));
        })
        .then(() => {
          let noSpaceUri = title.replace(/\s+/g, '-');
          dispatch(push(`/recipes/recipe/${id}/${noSpaceUri}`));
        })
        .catch(err => {
          dispatch(push(`/NotFound`));
          dispatch(callHasErrored(err));
        });
    }
  });
};

//! get recipe summary
export const getRecipeSum = id => dispatch => {
  //
  recipeSum.removeTokens(1, (error, remainingRequests) => {
    error = 'Too many Api calls. Please wait...';
    const rate = remainingRequests;
    localStorage.setItem('DO_NOT_DELETE_03', rate);
    //
    const controlRate = JSON.parse(localStorage.getItem('DO_NOT_DELETE_03'));
    if (controlRate < 1) {
      console.log(error);
      dispatch(push(`/network-error`));
    } else {
      dispatch(callIsLoading());
      axios
        .get(
          `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/summary`,
          {
            headers: {
              'X-Mashape-Key': API_KEY,
              Accept: 'application/json'
            }
          }
        )
        .then(res => {
          dispatch(getRecipeSummary(res));
        })
        .catch(err => {
          dispatch(push(`/NotFound`));
          dispatch(callHasErrored(err));
        });
    }
  });
};

export const resetState = () => ({
  type: RESET_STATE
});

export const callIsLoading = () => ({
  type: IS_LOADING
});

export const callHasErrored = err => ({
  type: HAS_ERRORED,
  payloadError: err
});

export const getRecipesData = res => ({
  type: RECIPES_CALL,
  payload: res.data.results,
  payloadInfo: res.data.totalResults
});

export const getRecipeData = res => ({
  type: RECIPE_CALL,
  payload: res.data
});

export const getRecipeSummary = res => ({
  type: RECIPE_SUM,
  payload: res.data.summary
});

export const recipeInput = ({ recipeInput, recipeStyle }) => ({
  type: INPUT_DATA,
  recipeInput,
  recipeStyle
});

import React from 'react';
import { connect } from 'react-redux';
import { searchRecipeInfo, getRecipeSum } from '../../redux/actions/actions';

//! Reactstrap
import { Media } from 'reactstrap';

//! component style

import MediaQuery from 'react-responsive';
import './style.css';

const RecipeCard = props => {
  //
  const { id, title, readyInMinutes, servings, image } = props.recipe;

  return (
    <div>
      <Media className="anim-fa-in card-wrapper">
        <Media
          left
          className="card__img-container"
          style={{
            background: `url(https://spoonacular.com/recipeImages/${image})`,
            backgroundPosition: 'center',
            backgroundOrigin: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          onClick={() => {
            props.searchRecipeInfo({
              id,
              title
            });
            props.getRecipeSum(id);
          }}
        />

        <Media body className="flex-helper-column">
          <Media
            heading
            className="card__header card__header--color"
            onClick={() => {
              props.searchRecipeInfo({
                id,
                title
              });
              props.getRecipeSum(id);
            }}
          >
            {title}
          </Media>
          <MediaQuery query="(min-width: 577px)">
            <div className="flex-helper-row">
              <p className="card__details">
                Ready in
                <span className="card__details--span"> {readyInMinutes} </span>
                min.
              </p>
              <p className="card__details">
                Serves <span className="card__details--span"> {servings} </span>
                people
              </p>
            </div>
          </MediaQuery>
          <div className="flex-helper-row--spacing">
            <button
              className="btn btn-success btn-sm button--spacing"
              onClick={() => {
                props.searchRecipeInfo({
                  id,
                  title
                });
                props.getRecipeSum(id);
              }}
            >
              Go to Recipe
            </button>
          </div>
        </Media>
      </Media>
    </div>
  );
};

export default connect(
  null,
  {
    searchRecipeInfo,
    getRecipeSum
  }
)(RecipeCard);

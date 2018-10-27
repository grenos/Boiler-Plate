import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default () => {
  return (
    <div className="not-found-wrapper wrapper--background">
      <h1>Woops! There's been a mistake! </h1>
      <Link to="/">
        {' '}
        <h4 className="recipe-main__back-link">
          Go Back and search for more delicious recipes!
        </h4>{' '}
      </Link>
    </div>
  );
};

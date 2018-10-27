import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import { Row } from 'reactstrap';

// import RecipeRes_1 from '../../mock_json_data/RecipeRes_1.json';
// import ResponseSum_1 from '../../mock_json_data/RecipeSum_1.json';

const TopWindow = props => {
  const { image } = props.recipeInfo;
  const recipeSum = props.recipeSum;

  // purify html
  const text = DOMPurify.sanitize(recipeSum);

  return (
    <Row className="top-window-wrapper">
      <div className="col-md-6">
        <img className="top-window__img" src={image} alt="recipe image" />
      </div>
      <div className="col-md-6">
        <h5
          className="top-window__recipe-sum"
          dangerouslySetInnerHTML={{ __html: `${text}` }}
        />
      </div>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo,
    recipeSum: state.apiReducer.recipeSum
  };
};

TopWindow.propTypes = {
  recipeInfo: PropTypes.shape({
    image: PropTypes.string,
    sourceName: PropTypes.string,
    sourceUrl: PropTypes.string
  }),
  recipeSum: PropTypes.string
};

export default connect(mapStateToProps)(TopWindow);

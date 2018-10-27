import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

//import RecipeRes_1 from '../../mock_json_data/RecipeRes_1.json';

const RecipeInstructions = props => {
  const { analyzedInstructions } = props.recipeInfo;

  return (
    <div>
      {!analyzedInstructions
        ? null
        : analyzedInstructions.map(allSteps => {
            return allSteps.steps.map((individualStep, index) => {
              return (
                <div key={index}>
                  <ListGroup>
                    <ListGroupItem className="justify-content-between recipe-instruction__list-item">
                      <Badge
                        color="warning"
                        className="list-item__list-badges--size"
                        pill
                      >
                        {index + 1}
                      </Badge>{' '}
                      {individualStep.step}
                    </ListGroupItem>
                  </ListGroup>
                </div>
              );
            });
          })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

RecipeInstructions.propTypes = {
  recipeInfo: PropTypes.shape({
    analyzedInstructions: PropTypes.array
  })
};

export default connect(mapStateToProps)(RecipeInstructions);

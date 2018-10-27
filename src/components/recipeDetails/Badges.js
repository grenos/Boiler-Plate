import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Badge } from 'reactstrap';

const Badges = props => {
  const {
    preparationMinutes,
    readyInMinutes,
    servings,
    cuisines,
    dishTypes
  } = props.recipeInfo;

  return (
    <div className="recipe-main__badges">
      <Badge color="info" pill>
        Preparation: {preparationMinutes ? preparationMinutes + ' min' : 'n/a'}
      </Badge>
      <Badge color="info" pill>
        Ready in: {readyInMinutes ? readyInMinutes + ' min' : 'n/a'}
      </Badge>
      <Badge color="info" pill>
        Servings: {servings ? servings : 'n/a'}
      </Badge>
      {!cuisines
        ? null
        : cuisines.map((cousine, index) => {
            return (
              <Badge key={index} color="warning" pill>
                {cousine}
              </Badge>
            );
          })}
      {!dishTypes
        ? null
        : dishTypes.map((dish, index) => {
            return (
              <Badge key={index} color="success" pill>
                {dish}
              </Badge>
            );
          })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

Badges.propTypes = {
  recipeInfo: PropTypes.shape({
    preparationMinutes: PropTypes.number,
    readyInMinutes: PropTypes.number,
    servings: PropTypes.number,
    cuisines: PropTypes.array,
    dishTypes: PropTypes.array
  })
};

export default connect(mapStateToProps)(Badges);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import capitalizer from '../../helpers/capitalizer';
//import RecipeRes_1 from '../../mock_json_data/RecipeRes_1.json';

const Wines = props => {
  const { winePairing } = props.recipeInfo;
  const wines = winePairing.pairedWines;
  const wineText = winePairing.pairingText;

  return (
    <div>
      <div className="wines__list__wrapper">
        {!wines
          ? 'No suggestions found'
          : wines.map((wine, index) => {
              return (
                <h5 key={index} className="wine__list__titles">
                  {capitalizer(wine)}
                </h5>
              );
            })}
      </div>
      <div>
        <p className="wines__text">{wineText ? wineText : null}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

Wines.propTypes = {
  recipeInfo: PropTypes.shape({
    winePairing: PropTypes.object
  }),
  winePairing: PropTypes.shape({
    pairingText: PropTypes.string
  })
};

export default connect(mapStateToProps)(Wines);

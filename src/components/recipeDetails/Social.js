import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  ViberShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  ViberIcon
} from 'react-share';

import './style.css';

const Social = props => {
  //
  const { title } = props.recipeInfo;
  const recipeUrl = `https://delecipes.herokuapp.com/${
    props.locationUrl.pathname
  }`;

  return (
    <div className="social__container">
      <div className="social__some-network">
        <FacebookShareButton
          url={recipeUrl}
          quote={title}
          hashtag="#Delecipes"
          className="social__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      <div className="social__some-network">
        <TwitterShareButton
          url={recipeUrl}
          title={title}
          className="social__some-network__share-button"
          hashtags={['Delecipes', 'Recipes', 'BestRecipes']}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>

      <div className="social__some-network">
        <WhatsappShareButton
          url={recipeUrl}
          title={title}
          separator=" | "
          className="social__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      <div className="social__some-network">
        <ViberShareButton
          url={recipeUrl}
          title={title}
          body="body"
          className="social__some-network__share-button"
        >
          <ViberIcon size={32} round />
        </ViberShareButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

Social.propTypes = {
  recipeInfo: PropTypes.shape({
    title: PropTypes.string
  })
};

export default connect(mapStateToProps)(Social);

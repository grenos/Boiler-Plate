import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Row } from 'reactstrap';

//import RecipeRes_1 from '../../mock_json_data/RecipeRes_1.json';

const Header = props => {
  const { title, sourceName, sourceUrl } = props.recipeInfo;

  return (
    <Row>
      <div className="col-md-12 mb-4">
        <h1 className="recipe-main__title" style={{ fontSize: '3em' }}>
          {title}
        </h1>
        <div className="col-md-12" className="make-flex-row">
          <h5>
            <span className="author--quote-span">written by</span> {sourceName}
          </h5>
          <h5 className="author__title">
            <a className="author--quote-span" href={sourceUrl}>
              Original Article
            </a>
          </h5>
        </div>
      </div>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

Header.propTypes = {
  recipeInfo: PropTypes.shape({
    title: PropTypes.string,
    sourceName: PropTypes.string,
    sourceUrl: PropTypes.string
  })
};

export default connect(mapStateToProps)(Header);

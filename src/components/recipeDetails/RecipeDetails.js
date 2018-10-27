import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Row } from 'reactstrap';

import MyNavbar from '../navbar/MyNavbar';
import Header from './Header';
import Social from './Social';
import TopWindow from './TopWindow';
import Badges from './Badges';
import IngredientCard from './IngredientCard';
import RecipeInstructions from './RecipeInstructions';
import Wines from './Wines';

//import RecipeRes_1 from '../../mock_json_data/RecipeRes_1.json';

import './style.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //
    const { title } = this.props.recipeInfo;
    const location = this.props.location;

    return (
      <Container className="recipe-main__wrapper">
        <MyNavbar />

        <div>
          <Link to="/recipes" className="recipe-main__back-link anim-fa-in">
            Back
          </Link>
        </div>

        <Row className="justify-content-center anim-fa-in">
          <div className="col-md-10">
            <Header />
          </div>

          <div className="col-md-10">
            <Social locationUrl={location} />
          </div>

          <div className="col-md-10">
            <TopWindow />
          </div>

          <div className="col-md-10">
            <Badges />
          </div>

          <div className="col-md-10 mb-5">
            <h3 className="recipe-main__title">Ingredients</h3>
            <IngredientCard />
          </div>

          <div className="col-md-10 mb-5">
            <h3 className="recipe-main__title">Instructions</h3>
            <RecipeInstructions />
          </div>

          <div className="col-md-10">
            <h3 className="recipe-main__title">
              Wines that go well with {title}
            </h3>
            <Wines />
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

Recipe.propTypes = {
  recipeInfo: PropTypes.object.isRequired,
  recipeInfo: PropTypes.shape({
    title: PropTypes.string
  })
};

export default connect(mapStateToProps)(Recipe);

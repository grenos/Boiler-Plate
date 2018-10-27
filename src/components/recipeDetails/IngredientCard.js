import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardBody, Row } from 'reactstrap';

import capitalizer from '../../helpers/capitalizer';

import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 70px;
`;

//import RecipeRes_1 from '../../mock_json_data/RecipeRes_1.json';

const IngredientCard = props => {
  const { extendedIngredients } = props.recipeInfo;

  return (
    <Row>
      {!extendedIngredients
        ? null
        : extendedIngredients.map((ingredientItem, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <Card className="recipe-main__card">
                  <CardBody className="card__body--top">
                    <CardTitle className="card__title">
                      {capitalizer(ingredientItem.name)}
                    </CardTitle>
                  </CardBody>
                  <ImgContainer>
                    <Image
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${
                        ingredientItem.image
                      }`}
                      alt="Card image cap"
                    />
                  </ImgContainer>
                  <CardBody className="card__body--bottom">
                    <CardText>{ingredientItem.original}</CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    recipeInfo: state.apiReducer.recipeInfo
  };
};

IngredientCard.propTypes = {
  recipeInfo: PropTypes.shape({
    extendedIngredients: PropTypes.array
  })
};

export default connect(mapStateToProps)(IngredientCard);

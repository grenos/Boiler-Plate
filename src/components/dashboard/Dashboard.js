import React from 'react';
import { connect } from 'react-redux';

//! global css
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//! import components
import { Container, Row } from 'reactstrap';
import Header from './Header';
import Search from './Search';

//! redux components
import {
  searchRecipes,
  recipeInput,
  resetState
} from '../../redux/actions/actions';
import { store, persistor } from '../../redux/store/configureStore';

//! component style
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url('/dashboard.jpg') no-repeat center center;
  background-size: cover;
`;

const TextBox = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = props => {
  return (
    <div>
      <Main className="dashboard__main">
        <Container fluid>
          <Row>
            <TextBox className="col-md-12 col-lg-6 dashboard__main--left">
              <Header />
            </TextBox>
            <InputBox className="col-md-12 col-lg-6 ipad-mq dashboard__main--right">
              <Search
                onSubmit={recipeData => {
                  store.dispatch(resetState());
                  props.searchRecipes(recipeData);
                  store.dispatch(recipeInput(recipeData));
                }}
              />
            </InputBox>
          </Row>
        </Container>
      </Main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.apiReducer.error
  };
};

export default connect(
  mapStateToProps,
  { searchRecipes, recipeInput, resetState }
)(Dashboard);

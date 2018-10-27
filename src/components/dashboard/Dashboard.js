import React from 'react';
// import { connect } from 'react-redux';

//! global css
// import 'normalize.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

//! import components
// import { Container, Row } from 'reactstrap';
// import Header from './Header';
// import Search from './Search';

//! redux components
// import {
//   searchRecipes,
//   recipeInput,
//   resetState
// } from '../../redux/actions/actions';
// import { store } from '../../redux/store/configureStore';

//! component style
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  margin: 0;
  color: black;
  padding: 0;
  background-size: cover;
`;

const Dashboard = props => {
  return (
    <div>
      <Main>test</Main>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     error: state.apiReducer.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { searchRecipes, recipeInput, resetState }
// )(Dashboard);

export default Dashboard;

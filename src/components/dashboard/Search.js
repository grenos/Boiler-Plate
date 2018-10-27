import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import Spinner from '../spinner/Spinner';

//! Styling
import MediaQuery from 'react-responsive';
import './style.css';
import styled from 'styled-components';

const FormCard = styled.div`
  border-radius: 0.25em;
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  background: rgba(0, 0, 0, 0.7);
`;
const SmallTitle = styled.h4`
  color: white;
  font-size: 2vw;
  margin-bottom: 1em;
  font-weight: 300;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeInput: '',
      recipeStyle: ''
    };
  }
  recipeInputData = e => {
    const inputData = e.target.value;
    this.setState({
      recipeInput: inputData
    });
  };
  recipeStyleData = e => {
    const selectData = e.target.value;
    this.setState({
      recipeStyle: selectData
    });
  };
  //! Sent values to parent for dispatch to store
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      recipeInput: this.state.recipeInput,
      recipeStyle: this.state.recipeStyle
    });
  };
  render() {
    return (
      <FormCard className="form__main">
        <Form onSubmit={this.onSubmit}>
          <MediaQuery query="(min-width: 376px)">
            <SmallTitle className="form__title">
              Find the Best Recipes in the world
            </SmallTitle>
          </MediaQuery>
          <FormGroup>
            <Label
              for="search-recipe"
              style={{
                color: '#bdbdbd'
              }}
            >
              Search for Recipes
            </Label>
            <Input
              type="text"
              name="search"
              placeholder="I want to make..."
              onChange={this.recipeInputData}
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Label
              for="exampleSelect"
              style={{
                color: '#bdbdbd'
              }}
            >
              Choose Cousine Style
            </Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={this.recipeStyleData}
            >
              <option value="null">Pick a style (Optional)</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
              <option value="indian">Indian</option>
              <option value="french">French</option>
              <option value="italian">Italian</option>
              <option value="spanish">Spanish</option>
              <option value="greek">Greek</option>
              <option value="mexican">Mexican</option>
              <option value="african">African</option>
              <option value="middle eastern">Middle Eastern</option>
              <option value="caribean">Caribean</option>
              <option value="latin american">Latin American</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Button color="success" type="submit">
              Search
            </Button>
            {this.props.loading && <Spinner />}
          </FormGroup>
        </Form>
      </FormCard>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.apiReducer.loading
  };
};

export default connect(mapStateToProps)(Search);

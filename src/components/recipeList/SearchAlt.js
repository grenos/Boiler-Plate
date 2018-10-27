import React, { Component } from 'react';

import { Button, FormGroup, Input, Form } from 'reactstrap';

import './style.css';
import styled from 'styled-components';

const FormCard = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 0.25em;
  justify-content: center;
  background: url('/dashboard.jpg') no-repeat center center;
  background-size: cover;
  margin: 1.5em 0 1.5em 0;
  padding .7em 0;
`;

class SearchAlt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeInput: '',
      recipeStyle: ''
    };
  }

  recipeInputData = e => {
    const inputData = e.target.value;
    this.setState({ recipeInput: inputData });
  };

  recipeStyleData = e => {
    const selectData = e.target.value;
    this.setState({ recipeStyle: selectData });
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
      <FormCard>
        <Form className="formCard__form" onSubmit={this.onSubmit}>
          <FormGroup className="formCard__form-group">
            <Input
              type="text"
              name="search"
              placeholder="I want to make..."
              onChange={this.recipeInputData}
            />
          </FormGroup>
          <FormGroup className="formCard__form-group">
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
          <FormGroup className="formCard__form-group">
            <Button color="success" type="submit">
              Search
            </Button>
          </FormGroup>
        </Form>
      </FormCard>
    );
  }
}

export default SearchAlt;

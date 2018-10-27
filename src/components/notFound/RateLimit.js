import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const BackLink = styled.div`
  padding: 1em;
  a {
    font-family: 'Alegreya', serif;
    color: #259a35;
    font-size: 1.4em;
    font-style: italic;
    margin: 1em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Msg = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 5em 5em 2em 5em;
  margin: 0 2em;
  border-radius: 0.2em;
  boxshadow: '1px 1px 10px #757575';
`;

const Title = styled.h3`
  font-family: 'Alegreya', serif;
  font-size: 1.7em;
  width: 70vw;
  line-height: 1.3em;
`;

const RateLimit = () => {
  return (
    <div className="wrapper--background">
      <Wrapper>
        <Msg>
          <Title>
            You have exceeded the daily rate limit for network requests. Please
            note, this site is an expo version and extra costs are introduced to
            the owner on each network request. For more information and
            resetting your limits please consider contacting the{' '}
            <a href="mailto:vasilis.green@gmail.com">owner</a>
            ...or just hit refresh and start over ;)
            <br />
            <BackLink>
              <Link to="/">Back</Link>
            </BackLink>
          </Title>
        </Msg>
      </Wrapper>
    </div>
  );
};

export default RateLimit;

import React from 'react';

import { media } from '../../helpers/mediaQTemplate';

import styled from 'styled-components';

const BigTitle = styled.h1`
  color: white;
  font-size: 13vw;
  line-height: 0.75em;
  letter-spacing: 0;

  ${media.ipad`
  line-height: 1em;
  text-align: center;
  `};
`;

const SpanText1 = styled.span`
  font-size: 6vw;
  line-height: 0.75em;
`;

const SpanText2 = styled.span`
  color: #259a35;
  font-size: 15vw;
`;

export default () => {
  return (
    <div>
      <BigTitle>
        <SpanText1>The</SpanText1> <SpanText2>best</SpanText2> recipes for your
        cousine
      </BigTitle>
    </div>
  );
};

import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import Button from '../components/button';
import WhatIsOutstandingly from '../components/whatIsOutstandingly'

const StyledIndex = styled.div`
  position: relative;
`;

const IndexPage = () => (
  <StyledIndex>
    <Header />
    <WhatIsOutstandingly />
    <Button />
  </StyledIndex>
);

export default IndexPage;

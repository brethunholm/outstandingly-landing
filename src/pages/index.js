import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';

const StyledIndex = styled.div`
  position: relative;
`;

const IndexPage = () => (
  <StyledIndex>
    <Header />
  </StyledIndex>
);

export default IndexPage;

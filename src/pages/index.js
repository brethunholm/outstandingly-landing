import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledIndex = styled.div`
  position: relative;
`;

const IndexPage = () => (
  <StyledIndex>
    <Header />
    <Link to="/components">Components</Link>
  </StyledIndex>
);

export default IndexPage;

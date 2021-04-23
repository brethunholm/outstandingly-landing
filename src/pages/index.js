import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../components/button';



const StyledIndex = styled.div`
  position: relative;
`;

const IndexPage = () => (
  <StyledIndex>
    <Header />
    <Link to="/components">Components</Link>
    <Button />
  </StyledIndex>
);

export default IndexPage;

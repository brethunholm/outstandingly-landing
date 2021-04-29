import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Header from '../components/header';
import Button from '../components/button';
// import BenefitsSection from '../components/benefitsSection';

const StyledIndex = styled.div`
  position: relative;
`;
const IndexPage = () => (
  <StyledIndex>
    <Header />
    <Link to='/components'>Components</Link>
    <Button />
  </StyledIndex>
);

export default IndexPage;

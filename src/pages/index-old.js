import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../components/button';
// import BenefitsSection from '../components/benefitsSection';

const StyledIndex = styled.div`
  position: relative;
`;
const OldIndexPage = () => (
  <StyledIndex>
    <Header />
    <Link to='/components'>Components</Link>
    <Button />
  </StyledIndex>
);

export default IndexPage;

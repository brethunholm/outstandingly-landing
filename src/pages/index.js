import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../components/button';
import BenefitsSection from '../components/benefitsSection';
import WhatIsOutstandingly from '../components/whatIsOutstandingly';
import Contact from '../components/contact';

const StyledIndex = styled.div`
  position: relative;
`;

const IndexPage = () => (
  <StyledIndex>
    <Header />
    <Link to="/components">Components</Link>
    <WhatIsOutstandingly />
    <Button />
    <Contact />
  </StyledIndex>
);

export default IndexPage;

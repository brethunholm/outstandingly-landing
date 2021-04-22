import * as React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import Button from '../components/button';
import BenefitsSection from '../components/benefitsSection';

const StyledIndex = styled.div`
  position: relative;
`;

const IndexPage = () => (
  <StyledIndex>
    <Header />
    <Button />
    <BenefitsSection />
  </StyledIndex>
);

export default IndexPage;

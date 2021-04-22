import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  flex-direction: ${props => props.flex || 'row'};
  position: relative;
  margin: 0 auto;
  padding: 2rem ${props => props.padding || '0'};
  width: 100%;
  background: ${props => props.background || 'var(--white)'};
`;

// Props:
//   padding: padding left and right  (optional)
//   background: background color (optional)
export default function SectionContainer(props) {
  return <StyledSection {...props}>{props.children}</StyledSection>;
}

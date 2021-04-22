import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  border: 1px solid var(--black);
  border-radius: 5px;
`;

export default function Button() {
  return <StyledButton>Press me!</StyledButton>;
}

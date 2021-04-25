import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  background: #fe6192;
  color: var(--black);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 200;

  &:hover {
    background: #f2e088;
  }
`;

export default function Button(props) {
  return <StyledButton>{props.text}</StyledButton>;
}

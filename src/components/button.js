import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  background: #fe6192;
  color: white;
  border: none;
  border-radius: 1px;
  padding: 0.5rem;
  font-size: 0.5rem;
  height: 2rem;
  text-align: center;
  font-weight: bold;

  &:hover {
    background: #f2e088;
    color: #fe6192;
    font-weight: bold;
  }
`;

export default function Button(props) {
  return <StyledButton>{props.text}</StyledButton>;
}

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  background: #fe6192;
  color: var(--white);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 200;
  cursor: pointer;
  overflow: hidden;

  transition: all 250ms ease-in-out;

  &:hover {
    background: #f2e088;
  }

  &:after {
    content: '';
    background: var(--white);
    display: block;
    position: absolute;
    padding-top: 200%;
    padding-left: 200%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export default function Button(props) {
  return (
    <StyledButton type={props.type} role="button">
      {props.text}
    </StyledButton>
  );
}

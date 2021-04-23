import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  .bnt {
    background: #FE6192;
    color: white;
    border: none;
    border-radius: 1px;
    padding: 0.5rem;
    font-size: .5rem;
    height: 2rem;
    text-align: center;
    font-weight: bold;
  }
  .bnt:hover {
    background: #F2E088;
    color: #FE6192;
    font-weight: bold;
  }
`;

export default function Button() {
  return <StyledButton>
    <button class="bnt">BUTTON TEXT</button>
    
    </StyledButton>;
}

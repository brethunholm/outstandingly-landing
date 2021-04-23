import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledCard = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;

  p {
    color: grey;
    line-height: 1.2rem;
    font-size: 0.7rem;
    text-align: center;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
`;
export default function BenefitsCard({ title, icon, content }) {
  return (
    <StyledCard>
      <h5>{title}</h5>
      <FontAwesomeIcon icon={icon} />
      <p>{content}</p>
    </StyledCard>
  );
}

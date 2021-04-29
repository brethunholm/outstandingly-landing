import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledCard = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid var(--white-darker);
  box-shadow: var(--card-shadow);
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1fr 0.75fr 2.25fr;
  justify-items: center;
  margin: 5px;
  padding: 5px;
  font-style: italic;
  transition: 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px #777;
    cursor: pointer;
  }

  p {
    color: var(--grey-darker);
    line-height: 1.2rem;
    font-size: 0.65rem;
    text-align: center;
    margin: 0;
  }
  h5 {
    place-self: center;
    margin: 0;
    padding: 0;
  }
  .icon {
    place-self: center;
    font-size: 1.8rem;
    color: #4ed5ee;
  }
`;
export default function BenefitsCard({ title, icon, content }) {
  return (
    <StyledCard>
      <FontAwesomeIcon className='icon' icon={icon} />
      <h5>{title}</h5>
      <p>{content}</p>
    </StyledCard>
  );
}

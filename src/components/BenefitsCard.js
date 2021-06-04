import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

const StyledBgImage = styled(BgImage)`
  width: 100%;
  height: 100% !important;
  border-radius: 15px;
`;

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: white;
  border: 3px solid var(--highlight-pink);
  min-height: 350px;
  justify-items: center;
  padding: 5px;
  gap: 30px;
  max-width: 600px;
  min-width: 300px;
  padding: 10px;
  transition: 250ms ease-in-out;

  &:hover {
    box-shadow: var(--card-shadow);
  }
  .image {
    flex: 1;
    max-width: 300px;
    min-width: 300px;
    min-height: 150px;
  }

  .content-wrap {
    flex: 1;

    p {
      color: var(--grey-darker);
      line-height: 1.2rem;
      font-size: 20px;
      text-align: left;
      margin: 0;
    }
    h3 {
      place-self: center;
      margin: 0;
      padding: 0;
    }
    .icon {
      place-self: center;
      font-size: 1.8rem;
      color: var(--accent-dark);
      margin-bottom: 15px;
    }
  }
`;
export default function BenefitsCard({ title, icon, content, image }) {
  console.log(image);
  return (
    <StyledCard>
      <div className='image'>
        <StyledBgImage image={image} alt='' />
      </div>
      <div className='content-wrap'>
        <FontAwesomeIcon className='icon' icon={icon} />
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </StyledCard>
  );
}

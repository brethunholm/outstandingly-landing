import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const MembersStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-height: 500px;
  box-shadow: 0px 5px 27px 0px rgb(0 0 0 / 9%);
  text-align: top;
  margin: 10px;
  min-width: 300px;

  flex: 1;
  .gatsby-image-wrapper {
    min-height: 300px;
    max-height: 300px;
  }

  .name {
    padding: 10px;
    margin: 0;
    text-transform: uppercase;
    font-size: 17px;
    color: var(--grey);
  }

  .text {
    padding: 0 5px;
  }

  @media (min-width: 970px) and (max-width: 1294px) {
    .gatsby-image-wrapper {
      height: 350px;
      width: 350px;
    }

    min-width: 350px;
  }

  @media (min-width: 1700px) {
    .gatsby-image-wrapper {
      width: 400px;
    }

    width: 400px;
  }
`;

export default function MembersCard({ name, img, about }) {
  return (
    <MembersStyled>
      <GatsbyImage image={img} alt={name} placeholder='blurred' />
      <div className='content'>
        <h3 className='name'>{name}</h3>
        <p className='text'>{about}</p>
      </div>
    </MembersStyled>
  );
}

import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const MembersStyled = styled.div`
  .gatsby-image-wrapper {
    height: 300px;
    width: 300px;
  }
  height: 450px;
  width: 300px;
  box-shadow: 0px 5px 27px 0px rgb(0 0 0 / 9%);
  text-align: center;
  margin: 10px;
  h3 {
    font-style: italic;
  }
  @media (min-width: 970px) and (max-width: 1294px) {
    .gatsby-image-wrapper {
      height: 350px;
      width: 350px;
    }
    height: 500px;
    width: 350px;
  }
  /* @media (min-width: 1295px) and (max-width: 1699px) {
    border: 1px solid red;
    .gatsby-image-wrapper {
      height: 350px;
      width: 350px;
    }
    height: 450px;
    width: 350px;
  } */
  @media (min-width: 1700px) {
    .gatsby-image-wrapper {
      height: 400px;
      width: 400px;
    }
    height: 600px;
    width: 400px;
  }
`;

export default function MembersCard({ name, img, about }) {
  return (
    <MembersStyled>
      <GatsbyImage image={img} alt={name} placeholder='blurred' />
      <div className='content'>
        <h3>{name}</h3>
        <p>{about}</p>
      </div>
    </MembersStyled>
  );
}

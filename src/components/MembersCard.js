import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const MembersStyled = styled.div`
  height: 500px;
  width: 350px;
  box-shadow: var(--card-shadow);
  text-align: center;
  margin: 10px;
  h3 {
    font-style: italic;
  }
`;

export default function MembersCard({ name, img, about }) {
  console.log(img);
  return (
    <MembersStyled>
      <StaticImage
        src="../images/lukeGlitchHeadshot.jpeg"
        alt="luke, the legend"
        placeholder="blurred"
        layout="fixed"
        width={350}
        height={300}
      />
      <div className="content">
        <h3>{name}</h3>
        <p>{about}</p>
      </div>
    </MembersStyled>
  );
}

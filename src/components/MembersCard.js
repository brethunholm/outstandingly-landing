import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const MembersStyled = styled.div`
  height: 400px;
  width: 350px;
  box-shadow: var(--card-shadow);
    text-align: center;
    margin: 0%;
  }
`;

export default function MembersCard() {
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
      <h2>Luke Gartland</h2>
      <p>Luke enjoys sailing, kitesurfing and coding.</p>
    </MembersStyled>
  );
}

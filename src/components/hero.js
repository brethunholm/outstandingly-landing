import React from 'react'
import styled from 'styled-components';
import SectionContainer from './section-container'
import Cover from '../videos/blue-liquid.mp4'
import VideoBg from "reactjs-videobg";

const StyledHero = styled.div`
height: 30%;
width: 100vw;
display: grid;
justify-content: center;
align-items: center;
background: #4ED5EF;
.hero {
 height:100%;
  position: absolute;
  top: 0;
  z-index: -1;
}
`;

export default function Hero() {
   return (
      <SectionContainer>
          <StyledHero>
              <h1>Outstandingly</h1>
         <VideoBg videoClass='hero' loop>
        <VideoBg.Source  src={Cover} type="video/mp4" />
        </VideoBg>;

          </StyledHero>




      </SectionContainer>
   )
}
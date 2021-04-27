import React from 'react';
import styled from 'styled-components';
import VideoBg from 'reactjs-videobg';
import Cover from '../videos/blue-liquid.mp4';

const StyledHero = styled.div`
  height: 40%;
  width: 100vw;
  display: grid;
  justify-content: center;
  align-items: center;
  background: transparent;
  h1 {
    color: var(--white);
    font-size: 4rem;
    padding: 2rem;
    font-weight: bold;
    line-height: 0.9em;
  }

  .hero {
    /* height: 100vh;
    width: 100vw; */
    position: fixed;
    /* top: 0;
    z-index: -1; */
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <h1>OUTSTANDINGLY</h1>
      <VideoBg videoClass="hero" loop>
        <VideoBg.Source src={Cover} type="video/mp4" />
      </VideoBg>
    </StyledHero>
  );
}

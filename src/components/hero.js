import React from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { graphql, useStaticQuery } from 'gatsby';

const StyledHero = styled(BgImage)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: var(--white);
  padding: 4rem;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.4) !important;
  background-position: bottom left !important;

  &::before,
  &::after {
  }

  h1 {
    font-size: 5rem;
    padding: 0.3rem;
    font-weight: bold;
    font-family: 'Roboto', Sans-Serif;
  }

  .hero-content {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    font-family: 'Roboto', Sans-Serif;
  }

  .top-span {
    justify-self: center;
    font-size: 1.3rem;
    color: var(--btn-primary);
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 700px) {
    .bg {
      height: 30vh;
      color: var(--btn-primary);
      text-shadow: none;
    }
    .top-span {
      text-shadow: none;
      font-size: 1rem;
    }

    h1 {
      font-size: 1.85rem;
    }

    .hero-content {
      transform: translateY(-25px);
      font-weight: 900;
    }
  }
`;

function Hero() {
  const { hero } = useStaticQuery(graphql`
    query MyQuery {
      hero: file(absolutePath: { regex: "/coffee/" }) {
        blocks
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  `);

  const heroImg = getImage(hero);
  return (
    <>
      <StyledHero
        image={heroImg}
        preserveStackingContext
        backgroundColor='#666'
      >
        <div className='hero-content'>
          <span className='top-span'>DO SOMETHING</span>
          <h1>OUTSTANDINGLY</h1>
        </div>
      </StyledHero>
    </>
  );
}

export default Hero;

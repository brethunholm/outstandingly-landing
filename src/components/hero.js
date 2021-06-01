import React from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './button';

const StyledHero = styled(BgImage)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  padding: 4rem;
  /* text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.8); */
  background-color: rgba(0, 0, 0, 0.6) !important;
  background-position: bottom left !important;

  .highlight {
    color: var(--brand-blue);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .headline {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
    }
    .bi-line {
      font-size: 1.25rem;
      margin-bottom: 50px;
      font-family: 'Open Sans';
      font-weight: 200;
    }
    button {
      position: relative;
      text-transform: uppercase;
      font-size: 1rem;
    }
  }
  @media (max-width: 700px) {
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
          <h1 className='headline'>
            Gain real-world experience to kick start your career in tech
          </h1>
          <h2 className='bi-line'>
            Outstandingly brings people together to create world class
            portfolios in the tech sector
          </h2>
          <Button text='Apply Now' />
        </div>
      </StyledHero>
    </>
  );
}

export default Hero;

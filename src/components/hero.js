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
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.6) !important;
  background-position: bottom center !important;
  padding: 100px 1rem;

  @media (max-width: 768px) {
    padding-top: 50px;
  }

  .highlight {
    color: var(--brand-blue);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    .headline {
      margin: 0;
      font-size: 2rem;
      padding: 0 10px;
    }
    .bi-line {
      padding: 30px 10px;
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
`;

function Hero() {
  const { hero } = useStaticQuery(graphql`
    query MyQuery {
      hero: file(absolutePath: { regex: "/open-office-2/" }) {
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

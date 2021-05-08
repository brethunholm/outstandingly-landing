import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

const StyledHero = styled.div`
  .bg {
    width: 100vw;
    height: 60vh;
    display: grid;
    justify-content: center;
    align-items: center;
    background: var(--light-grey);
    color: var(--white);
    padding: 4rem;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.8);
    /* text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3); */
    /* text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5); */
  }

  h1 {
    font-size: 5rem;
    padding: 0.3rem;
    font-weight: bold;
  }

  .hero-content {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
  }

  .top-span {
    justify-self: center;
    font-size: 1.3rem;
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);
  }
`;

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  console.log('hero', data);

  return (
    <StyledHero>
      <BackgroundImage className='bg' fluid={data.file.childImageSharp.fluid}>
        <div className='hero-content'>
          <span className='top-span'>DO SOMETHING</span>
          <h1>OUTSTANDINGLY</h1>
          {/* <hr /> */}
        </div>
      </BackgroundImage>
    </StyledHero>
  );
}

export default Hero;

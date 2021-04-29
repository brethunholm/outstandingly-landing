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
    background: var(--black);
    color: var(--white);
    padding: 4rem;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.8);
  }

  h1 {
    font-size: 5rem;
    padding: 0.3rem;
    font-weight: bold;
  }

  .hero-content {
    display: grid;
    /* width: 100vw; */
    justify-content: center;
    grid-template-columns: 1fr;
  }

  .top-span {
    justify-self: center;
    font-size: 1.3rem;
  }

  hr {
    height: 1px;
    /* margin: 50px 0; */
    background: -webkit-gradient(
      linear,
      0 0,
      100% 0,
      from(rgba(0, 0, 0, 0)),
      color-stop(0.5, #333333),
      to(rgba(0, 0, 0, 0))
    );
    background: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      #333333,
      rgba(0, 0, 0, 0)
    );
    background: -moz-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      #333333,
      rgba(0, 0, 0, 0)
    );
    background: -o-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      #333333,
      rgba(0, 0, 0, 0)
    );
    background: linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      #333333,
      rgba(0, 0, 0, 0)
    );
    border: 0;
  }
  hr:after {
    display: block;
    content: '';
    height: 30px;
    background-image: -webkit-gradient(
      radial,
      50% 0%,
      0,
      50% 0%,
      116,
      color-stop(0%, #cccccc),
      color-stop(100%, rgba(255, 255, 255, 0))
    );
    background-image: -webkit-radial-gradient(
      center top,
      farthest-side,
      #cccccc 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-image: -moz-radial-gradient(
      center top,
      farthest-side,
      #cccccc 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-image: -o-radial-gradient(
      center top,
      farthest-side,
      #cccccc 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-image: radial-gradient(
      farthest-side at center top,
      #cccccc 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /* @media (max-width: 900px) {
    .hero-bg {
      display: none;
    }
    background: #259fcb;
  } */
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
      <BackgroundImage className="bg" fluid={data.file.childImageSharp.fluid}>
        <div className="hero-content">
          <span className="top-span">SOMETHING SOMETHING</span>
          <h1>OUTSTANDINGLY</h1>
          {/* <hr /> */}
        </div>
      </BackgroundImage>
    </StyledHero>
  );
}

export default Hero;

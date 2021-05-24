import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const StyledComingSoon = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);

  h1 {
    color: var(--white-darker);
    font-weight: 200;
  }

  img {
    max-width: 200px;
  }
`;

export default function ComingSoon({ data }) {
  return (
    <StyledComingSoon>
      <GatsbyImage
        image={data.logo.childImageSharp.gatsbyImageData}
        alt='Outstandingly Logo'
      />
      <h1>Outstandingly</h1>
      <Link to='/components'>.</Link>
    </StyledComingSoon>
  );
}

export const data = graphql`
  query {
    logo: file(relativePath: { eq: "logo_200.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, PNG]
        )
      }
    }
  }
`;

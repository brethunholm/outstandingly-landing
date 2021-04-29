import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { BgImage } from 'gbimage-bridge';
import styled from 'styled-components';
// import BackgroundImage from 'gatsby-background-image';

const BgStyles = styled.div`
  body {
    .masthead {
      width: 100%;
      min-height: 100vh;
    }
  }
`;

const Page2 = () => {
  const { placeholderImage123 } = useStaticQuery(
    graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "greenblue.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
              webpOptions: { quality: 70 }
              width: 2000
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage123);

  return (
    <BgStyles>
      <BgImage image={pluginImage} className="masthead">
        <h1>Hello from BgImage!</h1>
      </BgImage>
    </BgStyles>
  );
};

export default Page2;

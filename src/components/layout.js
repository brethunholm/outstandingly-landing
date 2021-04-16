import * as React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import { GlobalStyle } from '../styles/GlobalStyle';

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;

import * as React from 'react';

import Layout from '../components/layout';
import { GlobalStyle } from '../styles/GlobalStyle';
import Header from '../components/header';

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Header />
    </Layout>
  </>
);

export default IndexPage;

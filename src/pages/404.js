import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledFourOhFour = styled.div`
padding: 2rem;
height: 100vh;
width: 100vw;
display: grid;
justify-items: center;
align-content: center;
background: #4ED5EF;

.title {
  color: white;
  font-size: 8rem;
  font-weight: bold;
  text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}

.highlight {
  color: #5721F7;
  font-weight: bold;
  font-style: oblique;
}

.fourOhFourBnt {
  padding: 0.5rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 8px 6px -6px black;
  background: #BBEBFA;
}

`;

const NotFoundPage = () => (
  <Layout>
    <StyledFourOhFour>
    <h1 className="title">Oops!</h1>
    <h3>404 - PAGE NOT FOUND</h3>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <button className="fourOhFourBnt">RETURN TO <span className="highlight">OUTSTANDINGLY</span> HOMEPAGE</button>
    </StyledFourOhFour>
  </Layout>
);

export default NotFoundPage;

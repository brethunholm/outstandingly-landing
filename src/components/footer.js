import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import FormSubscribe from './formSubscribe';
import SectionContainer from './section-container';

const StyledFooter = styled.footer`
  display: grid;
  color: var(--white);
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 690px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  .brand {
    white-space: nowrap;
  }

  .stay-connected {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    /* align-items: center;
    margin: 0 auto; */

    @media (max-width: 690px) {
      margin: 0;
      align-items: flex-start;
    }

    h1:first-child {
      margin-bottom: -5px;
    }
  }
  .wrap-subscribe-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;

    .heading-text {
      font-size: 2rem;
      text-align: left;
    }
  }
`;

const StyledFooterMenu = styled.nav`
  color: var(--white);
  ul {
    list-style: none;
    li {
      margin: 0;
      a {
        color: var(--white);
      }
    }
  }
`;

export default function Footer() {
  return (
    <SectionContainer background='var(--black)'>
      <StyledFooter>
        <StyledFooterMenu>
          <h1 className='brand'>
            <StaticImage src='../images/logo_200.png' alt='Logo' width={50} />
            utstandingly
          </h1>
          <ul>
            <li>
              <Link to='#'>Privacy</Link>
            </li>
            <li>
              <Link to='#'>Terms of Service</Link>
            </li>
          </ul>
        </StyledFooterMenu>
        <div className='wrap-subscribe-form'>
          <div className='stay-connected'>
            <h1>STAY</h1>
            <h1>CONNECTED</h1>
          </div>
          <div className='form-wrapper'>
            <p>Subscribe to the latest updates from Outstandingly</p>
            <FormSubscribe />
          </div>
        </div>
      </StyledFooter>
    </SectionContainer>
  );
}

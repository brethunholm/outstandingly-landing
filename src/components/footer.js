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

  .subscribe-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;

    .heading-text {
      font-size: 2rem;
      text-align: left;

      p {
        margin: -1.5rem 0;
        padding: 0;
      }
    }
  }
`;

export default function Footer() {
  return (
    <SectionContainer background="var(--black)">
      <StyledFooter>
        <p>MENU</p>
        <div className="subscribe-form">
          <div className="heading-text">
            <p>STAY</p>
            <p>CONNECTED</p>
          </div>
          <div className="form-wrapper">
            <p>Subscribe to the latest updates from Outstandingly</p>
            <FormSubscribe />
          </div>
        </div>
      </StyledFooter>
    </SectionContainer>
  );
}

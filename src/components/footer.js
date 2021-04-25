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

  .title {
    font-size: 2rem;
    text-align: left;

    .text-wrapper {
      display: flex;
      flex-direction: column;
      span {
        text-align: left;
      }
    }
  }
`;

export default function Footer() {
  return (
    <SectionContainer background="var(--black)">
      <StyledFooter>
        <p>MENU</p>
        <div className="title">
          <span className="text-wrapper">
            <span>STAY</span>
            <span>CONNECTED</span>
          </span>
        </div>
        <div className="subscribe-form">
          <span>Subscribe to the latest updates from Outstandingly</span>
          <FormSubscribe />
        </div>
      </StyledFooter>
    </SectionContainer>
  );
}

import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr;

  color: var(--black);
  padding: 2rem;
  gap: 1rem;
  grid-template-areas: 'title vl content';

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .highlight {
    color: var(--highlight-pink);
  }

  .vl {
    border: none;
    border-left: 5px solid var(--black);
  }

  .content {
    padding: 20px;
    grid-area: content;
    text-align: justify;
    line-height: 30px;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'vl'
      'content';

    .vl {
      border: none;
      border-bottom: 5px solid var(--black);
    }

    .content {
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: 450px) {
    .content {
      padding: 0;
      margin: 0;
    }
    h1 {
      font-size: 1rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;

export default function WhatIsOutstandingly() {
  return (
    <StyledCard id='whatIs'>
      <div className='title'>
        {/* <h1>
          What is <span className='highlight'>Outstandingly?</span>
        </h1> */}
        <h1 className='heading'>
          Break out of the endless tutorial cycle and learn{' '}
          <span className='highlight'>web development</span> on the job
        </h1>

        <Button text='SHOW ME HOW' />
      </div>
      <div className='vl' />
      <div className='content'>
        <p>
          We offer newer developers the next step to gain the experience
          required to get their dream job. Our goal is to provide a productive,
          accessible, collaborative work environment for new developers who are
          struggling to get their foot in the door. Collaborative project-based
          Creator Teams work together to create high-quality portfolio projects,
          gain real-world experience, and work in a development team environment
          while building a career network.
        </p>
        <p>
          We strive to represent the under-represented and elevate those that
          have had to struggle based solely on the basis of race, color,
          religion, gender, gender expression, age, national origin, disability,
          marital status, or sexual orientation. Our differences are our
          strengths and each of us brings that strength to the team.
          Representation makes our products and projects better and it’s
          celebrated.
        </p>
      </div>
    </StyledCard>
  );
}

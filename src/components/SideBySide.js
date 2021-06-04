import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  color: var(--black);
  padding: 75px 40px;
  gap: 1rem;
  grid-template-areas: 'title vl text_content';

  &.flipped {
    grid-template-areas: 'text_content vl title' !important;
  }

  .title {
    grid-area: title;
    display: flex;
    min-width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .highlight {
    color: var(--highlight-pink);
  }

  .vl {
    border: none;
    grid-area: vl;
    border-left: 5px solid var(--black);
  }

  .content {
    position: relative;
    grid-area: text_content;
    padding: 20px;
    text-align: justify;
    line-height: 30px;

    .seperator {
      width: 150px;
      border-bottom: 5px solid var(--highlight-pink);
      margin: auto;
      bottom: 0;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 10px 40px;

    grid-template-areas:
      'title'
      'vl'
      'text_content';

    &.flipped {
      grid-template-areas:
        'title'
        'vl'
        'text_content' !important;
    }

    .vl {
      display: none;
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

export default function SideBySide({ headline, btnText, sideText, flipped }) {
  console.log(flipped);
  return (
    <StyledCard className={flipped ? 'flipped' : ''}>
      <div className='title'>
        <h1 className='heading'>{headline}</h1>
        <Button text={btnText} />
      </div>
      <div className='vl' />
      <div className='content'>
        {sideText}
        <div className='seperator' />
      </div>
    </StyledCard>
  );
}

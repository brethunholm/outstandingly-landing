import React from 'react';
import styled from 'styled-components';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import BenefitsCard from './BenefitsCard';
import SectionContainer from './section-container';
const StyledBenefits = styled.div`
  /* max-width: 640px;
    justify-items:  center;
    align-items: center;
    align-content: center; */
  /* justify-content: center; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 1rem;

  @media (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;

export default function BenefitsSection() {
  const benniesCards = bennies.map(card => (
    <BenefitsCard
      id={card.id}
      title={card.title}
      icon={card.icon}
      content={card.content}
    />
  ));
  return (
    <SectionContainer background="var(--white-darker)">
      <StyledBenefits>{benniesCards}</StyledBenefits>
    </SectionContainer>
  );
}

const bennies = [
  {
    title: `benefit 1`,
    icon: faLaptopCode,
    content:
      'Gain real wold experience developing fullstack applications in a no wrong answers simulated work environment.',
    id: 1,
  },
  {
    title: `benefit 2`,
    icon: faLaptopCode,
    content:
      'Gain real wold experience developing fullstack applications in a no wrong answers simulated work environment.',
    id: 2,
  },
  {
    title: `benefit 3`,
    icon: faLaptopCode,
    content:
      'Gain real wold experience developing fullstack applications in a no wrong answers simulated work environment.',
    id: 3,
  },
  {
    title: `benefit 4`,
    icon: faLaptopCode,
    content:
      'Gain real wold experience developing fullstack applications in a no wrong answers simulated work environment.',
    id: 4,
  },
  {
    title: `benefit 5`,
    icon: faLaptopCode,
    content:
      'Gain real wold experience developing fullstack applications in a no wrong answers simulated work environment.',
    id: 5,
  },
  {
    title: `benefit 6`,
    icon: faLaptopCode,
    content:
      'Gain real wold experience developing fullstack applications in a no wrong answers simulated work environment.',
    id: 6,
  },
];

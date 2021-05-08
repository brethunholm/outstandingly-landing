import React from 'react';
import styled from 'styled-components';
import {
  faLaptopCode,
  faFileSignature,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
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
  const benniesCards = bennies.map((card) => (
    <BenefitsCard
      id={card.id}
      title={card.title}
      icon={card.icon}
      content={card.content}
    />
  ));
  return (
    <SectionContainer background='#f1f2f6' id='benefits'>
      <StyledBenefits>{benniesCards}</StyledBenefits>
    </SectionContainer>
  );
}

const bennies = [
  {
    title: `Experience`,
    icon: faLaptopCode,
    content:
      'Gain real wold experience developing fullstack applications in a no wrong answers simulated work environment.',
    id: 1,
  },
  {
    title: `Networking`,
    icon: faUsers,
    content:
      'Build a network of like minded developers, and create lasting  relationships.',
    id: 2,
  },
  // {
  //   title: `Collaboration`,
  //   icon: faLaptopCode,
  //   content: 'Learn from others',
  //   id: 3,
  // },
  // {
  //   title: `Quality projects`,
  //   icon: faLaptopCode,
  //   content: 'High quality portfolio project.',
  //   id: 4,
  // },
  // {
  //   title: `Up your game`,
  //   icon: faLaptopCode,
  //   content:
  //     'Outstandingly gives you accountability to help keep you focus on your projects.',
  //   id: 5,
  // },
  {
    title: `Get dialed in`,
    icon: faFileSignature,
    content:
      'Dial in your resume and fine tune your interview skills. Add high quality group projects to your portfolio.',
    id: 6,
  },
];

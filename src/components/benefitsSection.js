import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  faLaptopCode,
  faFileSignature,
  faUsers,
  faBriefcase,
  faTools,
  faCity,
} from '@fortawesome/free-solid-svg-icons';
import BenefitsCard from './BenefitsCard';
import SectionContainer from './section-container';

const StyledBenefits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    max-width: 900px;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  h1 {
    padding: 2rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .highlight {
    color: var(--btn-primary);
  }

  @media (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;

export default function BenefitsSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const benniesCards = bennies.map((card) => (
    <BenefitsCard
      key={card.id}
      title={card.title}
      icon={card.icon}
      content={card.content}
    />
  ));
  return (
    <SectionContainer background="#f1f2f6" id="benefits">
      <StyledBenefits>
        <h1>
          Why <span className="highlight">Outstandingly?</span>
        </h1>
        <div className="grids">
        <div className="container boxes" data-aos="fade-up">
            {benniesCards}
          </div>
        </div>
      </StyledBenefits>
    </SectionContainer>
  );
}

const bennies = [
  {
    title: `Experience`,
    icon: faLaptopCode,
    content:
      'You will acquire real-world experience developing full-stack applications in a cooperative, collaborative work environment. Through this process, you will grow and learn as a professional developer. ',
    id: 1,
  },
  {
    title: `Networking`,
    icon: faUsers,
    content:
      'While at Outstandingly you will begin to build your network of developers and peers, which is key in this industry. Your team is just the start. We’ll introduce you to professional tech recruiters and hiring managers. ',
    id: 2,
  },
  {
    title: `Portfolio`,
    icon: faBriefcase,
    content:
      'If you have what it takes to stick with it, you’ll walk away with a killer portfolio and the real-world work experience employers are looking for. Your portfolio will consist of a live project which you will be proud to show off. ',
    id: 3,
  },
  {
    title: `Building Skills`,
    icon: faTools,
    content:
      'You’re not just building a product, you’re building yourself. This is your chance to apply what you have learned so far and apply it to real projects. Working in a collaborative environment you will learn with and from your team.',
    id: 4,
  },
  {
    title: `Employment`,
    icon: faCity,
    content:
      'We strive to make this as true to an actual job as possible. In fact, you’ll probably want to quit at times! This is what hiring managers want to see; real-life examples of times you have met challenges head-on and overcame them. ',
    id: 5,
  },
  // {
  //   title: `Get dialed in`,
  //   icon: faFileSignature,
  //   content:
  //     'Dial in your resume and fine tune your interview skills. Add high quality group projects to your portfolio.',
  //   id: 6,
  // },
  {
    title: `Not ready?`,
    icon: faFileSignature,
    content:
      'We’ll get you ready. We’ll get you on track to succeed with a targetted roadmap that will build your skills incrementally and build your confidence exponentially',
    id: 6,
  },
];

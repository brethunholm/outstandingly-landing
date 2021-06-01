import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import MembersCard from './MembersCard';
import SectionContainer from './section-container';
import 'aos/dist/aos.css';

const AboutUsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .team-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
  }

  .highlight {
    color: var(--btn-primary);
  }

  @media (min-width: 973px) and (max-width: 1294px) {
    .team {
      max-width: 800px;
    }
  }
`;
export default function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const teamImages = useStaticQuery(graphql`
    query {
      bre: file(relativePath: { regex: "/bre/i" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      luke: file(relativePath: { regex: "/luke/i" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      patty: file(relativePath: { regex: "/patty/i" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      andrew: file(relativePath: { regex: "/andrew/i" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const members = [
    {
      name: 'Luke',
      img: teamImages.luke.childImageSharp.gatsbyImageData,
      about: 'Luke enjoys sailing, kitesurfing and coding.',
    },
    {
      name: 'Bre',
      img: teamImages.bre.childImageSharp.gatsbyImageData,
      about: 'Is pretty and a coding super star.',
    },
    {
      name: 'Patrick',
      img: teamImages.patty.childImageSharp.gatsbyImageData,
      about:
        'Holds a firm belief that people are pretty damn amazing when given a chance. Loves to explore the deep seas and steep rock. ',
    },
    {
      name: 'Andrew',
      img: teamImages.andrew.childImageSharp.gatsbyImageData,
      about:
        'Always thinking about big ideas and questions such as what is the difference between a pizza party and pizza dinner. Able to fold a fitted sheet.',
    },
  ];

  const theMembers = members.map((member, index) => (
    <MembersCard
      key={index}
      name={member.name}
      img={member.img}
      about={member.about}
    />
  ));
  return (
    <SectionContainer flex='column' id='team' className='grids'>
      <AboutUsStyled>
        <h1>
          Meet The <span className='highlight'>Team</span>
        </h1>

        <div className='team-wrap' data-aos='fade-up'>
          {theMembers}
        </div>
      </AboutUsStyled>
    </SectionContainer>
  );
}

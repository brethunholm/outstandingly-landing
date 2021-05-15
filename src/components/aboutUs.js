import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import MembersCard from './MembersCard';
import SectionContainer from './section-container';

const AboutUsStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
export default function aboutUs() {
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
      name: 'Luke Gartland',
      img: teamImages.luke.childImageSharp.gatsbyImageData,
      about: 'Luke enjoys sailing, kitesurfing and coding.',
      key: 1,
    },
    {
      name: 'Bre Thunholm',
      img: teamImages.bre.childImageSharp.gatsbyImageData,
      about: 'Is pretty and a coding super star.',
      key: 2,
    },
    {
      name: 'Patrick Franz',
      img: teamImages.patty.childImageSharp.gatsbyImageData,
      about: 'Has a dog named salty.',
      key: 3,
    },
    {
      name: 'Andrew ???',
      img: teamImages.andrew.childImageSharp.gatsbyImageData,
      about: 'Enjoys a good suit.',
      key: 4,
    },
  ];

  const theMembers = members.map((member) => (
    <MembersCard
      key={member.key}
      name={member.name}
      img={member.img}
      about={member.about}
    />
  ));
  return (
    <SectionContainer flex="column" id="team">
      <AboutUsStyled>
        <h1>
          MEET THE <span className="highlight">TEAM</span>
        </h1>
        <div className="team">{theMembers}</div>
      </AboutUsStyled>
    </SectionContainer>
  );
}

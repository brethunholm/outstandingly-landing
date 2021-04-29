import React from 'react';
import styled from 'styled-components';
import MembersCard from './MembersCard';
import SectionContainer from './section-container';

const AboutUsStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px 300px;
  /* repeat(auto-fit, minmax(240px, 1fr)); */
  h1 {
    background-color: white;
  }
`;
export default function aboutUs() {
  const theMembers = members.map((member) => (
    <MembersCard
      key={member.key}
      name={member.name}
      img={member.img}
      about={member.about}
    />
  ));
  return (
    <SectionContainer flex="column">
      <h2>About us</h2>
      <AboutUsStyled>{theMembers}</AboutUsStyled>
    </SectionContainer>
  );
}

const members = [
  {
    name: 'Luke Gartland',
    img: '../images/lukeGlitchHeadshot.jpeg',
    about: 'Luke enjoys sailing, kitesurfing and coding.',
    key: 1,
  },
  {
    name: 'Bre Thunholm',
    img: '../images/lukeGlitchHeadshot.jpeg',
    about: 'Is supper pretty and a coding suer star.',
    key: 2,
  },
  {
    name: 'Patrick Franz',
    img: '../images/lukeGlitchHeadshot.jpeg',
    about: 'Has a dog named salty.',
    key: 3,
  },
  {
    name: 'Andrew ???',
    img: '../images/lukeGlitchHeadshot.jpeg',
    about: 'Enjoys a good suit.',
    key: 4,
  },
];

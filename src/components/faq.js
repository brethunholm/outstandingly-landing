/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledSection = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  /* Style the accordion section */
  .accordion__section {
    display: flex;
    flex-direction: column;
  }

  /* Style the buttons that are used to open and close the accordion panel */
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
  }
  .active {
    display: flex;
  }
`;

const faqs = [
  {
    title:
      'What are the most important technical skills to have for a junior job position?',
    content: 'A really good answer',
    id: 'q01',
  },
  {
    title: 'What courses do you recommend?',
    content: 'Another good answer...Wes Bos, Stephen Grider',
    id: 'q02',
  },
  {
    title: 'How do I get my first coding job without professional experience?',
    content: 'A really good answer',
    id: 'q03',
  },
  {
    title: 'How can I build my confidence?',
    content: 'A really good answer about how great of a resource we are',
    id: 'q04',
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = questions.map((question, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={question.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="fas fa-caret-down" />
          {question.title}
        </div>
        <div className={`content ${active}`}>
          <p>{question.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
}

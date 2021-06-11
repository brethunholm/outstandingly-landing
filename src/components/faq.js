import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import arrow from '../images/down-arrow.svg';

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
  }

  .highlight {
    color: var(--btn-primary);
  }

  .faqs {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    padding: 15px;
  }

  .faqs .faq {
    margin: 15px;
    padding: 15px;
    background-color: white;
    border-radius: 2px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .faqs .faq .faq-question {
    position: relative;
    font-size: 20px;
    padding-right: 80px;
    transition: all 0.4s ease;
  }

  .faqs .faq .faq-question::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;

    background-image: url(${arrow});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    transition: all 0.4s ease-out;
  }

  .faqs .faq .faq-answer {
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.2s ease;
  }

  .faqs .faq.open .faq-question {
    margin-bottom: 15px;
  }

  .faqs .faq.open .faq-question::after {
    transform: translateY(-50%) rotate(180deg);
  }

  .faqs .faq.open .faq-answer {
    max-height: 1000px;
    opacity: 1;
  }

  @media (max-width: 450px) {
    font-size: 0.65rem;
  }
`;

export default function FaqSection() {
  const [faqs, setFaqs] = useState([
    {
      question:
        'What are the selection criteria for joining Outstandingly as a Creator?',
      answer: 'A really good answer',
      open: true,
    },
    {
      question: 'What if I want to be a Designer or Project Manager?',
      answer: `Right now are teams are small and lean. If you only want to do design or project management this probably won/'t be a good fit for you. If you want be a developer with a focus on design or project management, you'll have teams fighting over you.`,
      open: false,
    },
    {
      question:
        'I live in a different city/state/country can I still be part of Outstandingly?',
      answer: `Definatley! The working world has become remote and our industry is so well suited for that. In fact, the entire Outstandingly Team is spread out across North America.`,
      open: false,
    },
    {
      question: 'What does Outstandingly provide?',
      answer: '',
      open: false,
    },
    {
      question: 'How much does all this cost?',
      answer: '',
      open: false,
    },
    {
      question: 'What kind of commitment is required?',
      answer: '',
      open: false,
    },
    {
      question: 'Is this a bootcamp?',
      answer: `No ... not really. It's a group collaboration in a job-like setting. No one on your team is an experienced professional developer. There are no classes, no instructors and no grades. You'll be working together to solve problems, design solutions and get the project built.`,
      open: false,
    },
    {
      question: 'What kind of projects will we build?',
      answer: ``,
      open: false,
    },
    {
      question: `I've done what feels like endless tutorials and side projects and still can't get a job. Can you help me?`,
      answer: `You are the reason we founded Outstandingly! You've gained an understanding of web development, now you need to break out of that aptly called 'tutorial hell' and start applying those skills to bigger, cool projects that really can go somewhere.`,
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <StyledSection className='grids' id='faqs'>
      <h1>
        Frequently Asked <span className='highlight'>Questions</span>
      </h1>

      <div className='faqs boxes' data-aos='fade-right'>
        {faqs.map((faq, i) => (
          <Accordion key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </StyledSection>
  );
}

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
        'What are the most important technical skills to have for a junior job position?',
      answer: 'A really good answer',
      open: true,
    },
    {
      question: 'What courses do you recommend?',
      answer: 'Another good answer...Wes Bos, Stephen Grider',
      open: false,
    },
    {
      question:
        'How do I get my first coding job without professional experience?',
      answer: 'A really good answer',
      open: false,
    },
    {
      question: 'How can I build my confidence?',
      answer: 'A really good answer about how great of a resource we are',
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
    <StyledSection className='grids' id='faq'>
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

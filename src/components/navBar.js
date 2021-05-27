import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const NavStyles = styled.div`
  color: var(--white);
  display: flex;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  font-family: 'Roboto', Sans-Serif;
  width: 100%;
  z-index: 999;

  .nav-list {
    width: 100%;
    margin: 0;
    padding: 1rem 0;
    border-radius: 2px;
    display: flex;
    justify-self: flex-end;
    align-items: center;
  }

  .nav-item {
    list-style: none;
    margin-right: 0.75rem;
  }

  .nav-item button {
    border: none;
    background: none;
    color: var(--white);
    /* text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5); */
    font-size: 0.75rem;
    font-weight: bold;
  }

  .nav-item button:hover {
    color: #fe6192;
    transition: all 200ms ease-in;
  }

  .nav-item:first-child {
    margin-right: auto;
    margin-left: 1.3rem;
  }

  button:hover {
    cursor: pointer;
    color: var(--btn-primary);
  }

  .brand{
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .nav-list {
      height: 20px;
    }
    .nav-item {
      opacity: 0;
    }
    .nav-item:first-child {
      opacity: 1;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul className='nav-list nav'>
        <li className='nav-item '>
          <a className='brand' onClick={() => scrollTo('#contact')}>
            <StaticImage
              src='../images/logo_200.png'
              width={50}
              height={50}
              alt='Logo'
            />
          </a>
        </li>
        <li className='nav-item nav'>
          <button type='button' onClick={() => scrollTo('#whatIs')}>
            WHAT IS OUTSTANDINGLY?
          </button>
        </li>
        <li className='nav-item nav'>
          <button type='button' onClick={() => scrollTo('#benefits')}>
            BENEFITS
          </button>
        </li>
        <li className='nav-item nav'>
          <button type='button' onClick={() => scrollTo('#team')}>
            TEAM
          </button>
        </li>
        <li className='nav-item nav'>
          <button type='button' onClick={() => scrollTo('#contact')}>
            CONTACT US
          </button>
        </li>
        <li className='nav-item nav'>
          <button type='button' onClick={() => scrollTo('#contact')}>
            FAQS
          </button>
        </li>
      </ul>
    </NavStyles>
  );
}

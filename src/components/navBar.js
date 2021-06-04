import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const NavStyles = styled.div`
  color: var(--white);
  font-family: 'Open Sans';
  font-weight: 200;
  display: flex;
  position: absolute;
  top: 30px;
  width: 100%;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }

  .nav-list {
    width: 100%;
    margin: 0;

    border-radius: 2px;
    display: flex;
    justify-self: flex-end;
    align-items: center;
  }

  .nav-item {
    list-style: none;
    margin: 0;
  }

  .nav-item button {
    border: none;
    background: none;
    color: var(--white);
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  .nav-mobile {
    //TODO build out mobile menu
  }

  .nav-item button:hover {
    color: #fe6192;
    transition: all 200ms ease-in;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  .nav-item:first-child {
    margin-right: auto;
    margin-left: 1.3rem;
  }

  button:hover {
    cursor: pointer;
    color: var(--btn-primary);
  }

  .brand {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: var(--white);

    .gatsby-image-wrapper {
      min-width: 50px;
    }
    @media (max-width: 768px) {
      .gatsby-image-wrapper {
        max-width: 40px;
      }
      .brand-text {
        font-size: 22px;
      }
    }
    @media (max-width: 425px) {
      .brand-text {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    .nav-list {
      height: 20px;
    }
  }
`;

export default function Navbar() {
  return (
    <NavStyles>
      <div className='brand-wrap '>
        <Link to='/' className='brand'>
          <StaticImage
            src='../images/logo_200.png'
            width={50}
            height={50}
            alt='Logo'
          />
          <span className='brand-text'>utstandingly</span>
        </Link>
      </div>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item'>
            <button type='button' onClick={() => scrollTo('#whatIs')}>
              WHAT IS OUTSTANDINGLY?
            </button>
          </li>
          <li className='nav-item'>
            <button type='button' onClick={() => scrollTo('#benefits')}>
              BENEFITS
            </button>
          </li>
          <li className='nav-item'>
            <button type='button' onClick={() => scrollTo('#team')}>
              TEAM
            </button>
          </li>
          <li className='nav-item'>
            <button type='button' onClick={() => scrollTo('#contact')}>
              CONTACT US
            </button>
          </li>
          <li className='nav-item'>
            <button type='button' onClick={() => scrollTo('#contact')}>
              FAQS
            </button>
          </li>
        </ul>
      </nav>
    </NavStyles>
  );
}

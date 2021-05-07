import React from 'react';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

const NavStyles = styled.div`
  color: var(--white);
  box-sizing: border-box;

  .nav-list {
    background: var(--accent-dark);
    box-shadow: 0px 0px 10px var(--grey);
    margin: 0;
    padding: 1rem 0;
    border-radius: 2px;
    display: flex;
    justify-content: flex-end;
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
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
    font-size: 0.75rem;
  }

  .nav-item button:hover {
    color: #fe6192;
    transition: all 200ms ease-in;
  }

  .nav-item:first-child {
    margin-right: auto;
    margin-left: 1.5rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul className="nav-list">
        <li className="nav-item">
          <button type="button" onClick={() => scrollTo('#contact')}>
            🔥
          </button>
        </li>
        <li className="nav-item">
          <button type="button" onClick={() => scrollTo('#whatIs')}>
            What is Outstandingly?
          </button>
        </li>
        <li className="nav-item">
          <button type="button" onClick={() => scrollTo('#benefits')}>
            Benefits
          </button>
        </li>
        <li className="nav-item">
          <button type="button" onClick={() => scrollTo('#team')}>
            Meet the Team
          </button>
        </li>
        <li className="nav-item">
          <button type="button" onClick={() => scrollTo('#benefits')}>
            Projects
          </button>
        </li>
        <li className="nav-item">
          <button type="button" onClick={() => scrollTo('#contact')}>
            Contact Us
          </button>
        </li>
      </ul>
    </NavStyles>
  );
}

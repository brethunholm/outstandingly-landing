import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
// import { Link } from 'gatsby';
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
    margin-right: 2rem;
  }

  .nav-item span {
    color: var(--white);
  }

  .nav-item span:hover {
    color: #fe6192;
    transition: all 200ms ease-in;
  }

  .nav-item:first-child {
    margin-right: auto;
    margin-left: 2rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul className="nav-list">
        <li className="nav-item">
          <AnchorLink to="#" title="What is Outstandingly">
            <span>🔥</span>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink to="#whatIs" title="What is Outstandingly">
            <span>What is Outstandingly?</span>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink to="#benefits" title="What is Outstandingly">
            <span>Benefits</span>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink to="#team" title="What is Outstandingly">
            <span>Meet the team</span>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink to="/#whatIs" title="What is Outstandingly">
            <span>Projects</span>
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink to="#contact" title="What is Outstandingly">
            <span>Contact Us</span>
          </AnchorLink>
        </li>
      </ul>
    </NavStyles>
  );
}

import React from 'react';
import styled from 'styled-components';
import Button from './button';
import SectionContainer from './section-container';

const StyledCard = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    background:#6F43D6;
    color: var(--white);
    padding: 2rem;
    gap: 1rem;
    grid-template-areas: 
    'title  content';
  

    .title {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-area: title;
    }
    .highlight {
        color: #4ED5EE;
    }
    
    .vl {
        border-left: 5px solid #4ED5EE;
        height: 60%;
        position: absolute;
        left: 50%;
        margin-left: -3px;
        top: 20;

    }

    

    .content {
        padding: 20px;
        grid-area: content;
        margin: 2rem;
        display: grid;
        justify-items: center;
        align-items: center;
        text-align: center;
        
    }


    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: 
        'title'
        'content';
        
      
      .vl {
          display: none;
      }

      .content {
        overflow: scroll;
      }


        
  }

`;

export default function WhatIsOutstandingly() {
    return (
        <SectionContainer>
        <StyledCard>
            <div className="title">
            <h1>What is <span className="highlight">Outstandingly?</span></h1>
            </div>
            <div className="vl"></div>
           <div className="content">
           <p>What is our purpose? We want to provide a next step to new developers that want to gain the experience required to get the dream job. We strive to provide a productive, accessible, collaborative work environment for new / developing developers. Collaborative project based cohorts work together to create high quality portfolio projects, gain real word experience working in a development team environment while building a career network.</p>
           <Button text="˖ LEARN MORE" />
           </div>
            
        </StyledCard>
        </SectionContainer>
    )
}
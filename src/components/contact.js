import React from 'react';
import styled from 'styled-components';
import SectionContainer from './section-container';

const StyledContact = styled.div`
background: #1D1D1D;
width: 100vw;
height: 500px;
display: grid;
justify-items: center;
grid-template-areas: 
'title'
'form';
.title {
    color: white;
    grid-area: title;
    color: rgba(255, 255, 255, 0.75)
}

.form {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:#888888;
    grid-area: form;
    display: grid;
    gap: 1.5rem;
    justify-items: center;
    margin-bottom: 2rem;
    border: none;

}
input {
    background: none;
    color: white;
    width: 60vw;
    border: none;
    border-bottom: 1px solid #888888;
    font-size: 0.75rem;
    font-style: oblique;
}


.cta {
    background: #FE6192;
    color: white;
    border: none;
    font-size: 0.5rem;
    height: 2rem;
}



`;


export default function Contact() {
    return (
        <SectionContainer>
        <StyledContact>
            <h1 className="title">CONTACT US</h1>
            <form className="form">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="message" placeholder="Email" />
                <input type="text" name="email" placeholder="Message" />
            </form>
            <button className="cta"> Send Message </button>

        </StyledContact>
        </SectionContainer>
    )
}
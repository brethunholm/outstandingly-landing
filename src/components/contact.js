import React from 'react';
import styled from 'styled-components';
import SectionContainer from './section-container';
import Button from './button';
import { useFormik } from 'formik';

const StyledContact = styled.div`
background: var(--black);
width: 100vw;
padding-bottom: 2rem;
display: grid;
justify-items: center;
grid-template-areas: 
'title'
'form';
.title {
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

`;


export default function Contact() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: () => {
          console.log('Form submitted...');
          //add email address to email subscription service.
        },
      });
    return (
        <SectionContainer>
        <StyledContact>
            <h1 className="title">CONTACT US</h1>
            <form className="form">
                <input type="text" 
                name="name" 
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Name" 
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />
                  <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    />
            </form>
           <Button type="submit" text="˖ SEND MESSAGE"/>

        </StyledContact>
        </SectionContainer>
    )
}
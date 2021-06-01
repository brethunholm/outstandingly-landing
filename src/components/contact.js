import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import Button from './button';

const StyledContact = styled.div`
  /* background: var(--black); */
  background-image: linear-gradient(to bottom right, var(--black), #404040);
  width: 100vw;
  padding: 3rem;
  display: grid;
  justify-items: center;
  grid-template-areas:
    'title'
    'form';
  .title {
    color: var(--white);
  }

  .highlight {
    color: var(--btn-primary);
  }

  .form {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #888888;
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
    width: 40vw;
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
      // add email address to email subscription service.
    },
  });
  return (
    <StyledContact id='contact'>
      <h1 className='title'>
        Contact <span className='highlight'>Us</span>
      </h1>
      <form className='form'>
        <input
          type='text'
          name='name'
          id='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder='Name'
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type='text'
          name='message'
          id='message'
          placeholder='Message'
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </form>
      <Button type='submit' text='˖ SEND MESSAGE' />
    </StyledContact>
  );
}

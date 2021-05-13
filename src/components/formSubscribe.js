import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import Button from './button';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  input {
    background: none;
    width: 75%;
    color: var(--white);
    border: none;
    border-bottom: 1px solid var(--white);
    font-size: 0.75rem;
    font-style: oblique;
  }
  .submit-btn {
    align-self: left;
  }
`;

export default function FormSubscribe() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      console.log('Form submitted...');
    },
  });

  return (
    <>
      <StyledForm type='submit' onSubmit={formik.handleSubmit}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='EMAIL ADDRESS'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Button
          className='submit-btn'
          type='submit'
          role='button'
          text='SUBMIT'
        />
      </StyledForm>
    </>
  );
}

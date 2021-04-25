import React from 'react';
import { useFormik } from 'formik';
import Button from './button';
import styled from 'styled-components';

const StyledForm = styled.form`
  input {
    color: var(--white);
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white);
    margin-right: 10px;
  }
`;

export default function FormSubscribe() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      console.log('Form submitted...');
      //add email address to email subscription service.
    },
  });

  return (
    <>
      <StyledForm type="submit" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="EMAIL ADDRESS"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Button type="submit" role="button" text="SUBMIT" />
      </StyledForm>
    </>
  );
}

import React from 'react';
import { useFormik } from 'formik';
import Button from './button';

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
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="EMAIL ADDRESS"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Button text="SUBMIT" />
      </form>
    </>
  );
}

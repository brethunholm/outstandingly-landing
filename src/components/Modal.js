import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledModal = styled.div`
  position: fixed;
  overflow-x: hidden;
  top: 0;
  bottom: 20px;
  margin: 20px;
  max-height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
  box-shadow: 0 0 10px #111;
  .title {
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    color: #111;
    padding: 20px;
    width: 100%;
  }

  .body {
    padding: 0 25px;
  }
  .footer {
    padding: 5px 0;
    display: flex;
    justify-content: center;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
  }
`;

export default function Modal({ show, title, body, footer, close }) {
  return (
    show && (
      <StyledModal>
        <h1 className='title'>
          {title}
          <Button text={footer} handleClick={close} />
        </h1>
        <div className='body'>{body}</div>
      </StyledModal>
    )
  );
}

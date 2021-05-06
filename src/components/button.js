import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
--ripple-background: white;
    --ripple-opacity: 0.3;  
    --ripple-duration: 600ms; 


  position: relative;
  background: var(--btn-primary);
  color: var(--white);
  border: none;
  border-radius: 2px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  text-align: center;
  font-weight: 200;
  cursor: pointer;
  overflow: hidden;
  word-wrap: nowrap;
  white-space: nowrap;
  transition: all 250ms ease-in-out;

    &:before {
      content: '';
      position:absolute;
      display: block;
      background: var(--ripple-background, white);      
      border-radius: 50%;
      pointer-events: none; 
      
      //  position and size 
      top: calc(var(--y) * 1px);
      left: calc(var(--x) * 1px);
      width:  calc(var(--d) * 1px);
      height: calc(var(--d) * 1px);

      //  animated properties
      opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));                
      transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing,linear);   
      transform: translate(-50%, -50%) scale(var(--s, 1));
      transform-origin: center;
    }
}



  &:hover {
    background: var(--btn-primary-darker);
  }

  .ripple {
    width: 10px;
    height: 10px;
    opacity: 0;
    transform: scale(0);
    background: blue;
    border-radius: 50%;
    position: fixed;
  }

  .animate {
    animation: ripple-mo 1s cubic-bezier(0, 0, 0.2, 1);
  }
  @keyframes ripple-mo {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(10);
      opacity: 0;
    }
  }
`;

// TODO Refactor for single button

export default function Button({ type, text }) {
  const buttonRef = useRef();
  useEffect(() => {
    const el = buttonRef.current;
    el.addEventListener('click', (e) => {
      const event = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect();
      const d = Math.sqrt(r.width ** 2 + r.height ** 2) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;
      const top = el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
        event.clientX - r.left
      }; --y:${event.clientY - r.top};`;
    });
  }, []);
  return (
    <StyledButton ref={buttonRef} type={type} role='button'>
      {text}
    </StyledButton>
  );
}

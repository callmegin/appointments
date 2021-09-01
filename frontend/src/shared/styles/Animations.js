import { css, keyframes } from 'styled-components';

export const cubicBezier = `cubic-bezier(0.7, 0, 0.3, 1)`;

export const transition = (property, duration) => css`
  transition: ${property} ${duration}ms ${cubicBezier} 0ms;
`;

export const enterFromRight = keyframes`
  0% {
            transform: scaleX(0.2);
            transform-origin: 100% 100%;
  }
  100% {
            transform: scaleX(1);
            transform-origin: 100% 100%;
  }
`;
export const warningLeft = keyframes`
  0% {
    transform: translateX(48px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateX(26px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(13px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateX(6.5px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateX(4px);
    animation-timing-function: ease-in;
  }
  25%, 55%, 75%, 87%, 98% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`;

export const enterElement = keyframes`
  from {

    filter: blur(0.2rem);
    transform: translateZ(0);
  }
  to {

    filter: blur();
    transform: translateZ(0);
  }
`;
export const loading = keyframes`
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg) ;
    opacity: 1;
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) ;
    opacity: 1;
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg) ;
    opacity: 1;

  }
`;

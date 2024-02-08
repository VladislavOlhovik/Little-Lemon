import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    animation-timing-function: ease-in;
  }
  50% {
    transform: rotate(180deg) scale(1.6);
    animation-timing-function: ease-out;
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

export const PreloaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  & > svg {
    zoom: 200%;
    animation: ${rotate} 1.5s infinite;
  }
`;

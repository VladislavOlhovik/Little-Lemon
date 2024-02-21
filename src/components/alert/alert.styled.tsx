import styled, { keyframes } from 'styled-components';

const appearAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const AlertContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.styles.colors[theme.theme].primary};
  animation: ${appearAnimation} 0.5s ease-out forwards;

  & > div {
    width: 30vw;
    height: 30vh;
    background-color: ${({ theme }) =>
      theme.styles.colors[theme.theme].secondary};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${appearAnimation} 0.5s ease-out forwards;
  }
`;

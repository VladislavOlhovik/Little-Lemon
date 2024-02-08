import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.styles.colors[theme.theme].primary};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  border: none;
  padding: 1rem;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

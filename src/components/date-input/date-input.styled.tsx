import styled from 'styled-components';

export const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  font-size: ${({ theme }) => theme.styles.typography.fontSizeSection};
  & > input {
    color: #7b7d83;
    border-radius: 6px;
    height: 46px;
    padding: 0 15px;
    border: 1px solid;
    font-size: 18px;
    border-color: #d3d3d8;
  }
`;

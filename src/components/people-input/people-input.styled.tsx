import styled from 'styled-components';

export const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.styles.typography.fontSizeSection};
  .inputContainer {
    display: flex;
  }
  .inputContainer > button {
    background: #fafafa;
    color: #7b7d83;
    border: 1px solid #d3d3d8;
    padding: 0 0.5rem;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .inputContainer > button + button {
    border-radius: 0 6px 6px 0;
  }
  .inputContainer > input {
    width: 2rem;
    color: #7b7d83;
    border-radius: 6px 0 0 6px;
    height: 46px;
    padding: 0 15px;
    border: 1px solid;
    font-size: 18px;
    border-color: #d3d3d8;
  }
`;

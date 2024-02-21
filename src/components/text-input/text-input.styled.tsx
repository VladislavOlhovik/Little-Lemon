import styled from 'styled-components';

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.styles.typography.fontSizeSection};
  & > label {
    text-transform: capitalize;
    text-align: start;
  }
  & > input {
    color: #7b7d83;
    border-radius: 6px;
    height: 46px;
    padding: 0 15px;
    border: 1px solid;
    font-size: 18px;
    border-color: #d3d3d8;
  }
  & > div {
    height: 2rem;
  }
  .error {
    color: red;
  }
`;

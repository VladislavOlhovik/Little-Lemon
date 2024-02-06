import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: ${({ theme }) => theme.styles.blockPadding};
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }
`;

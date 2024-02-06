import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.styles.colors[theme.theme].secondary};
  padding: ${({ theme }) => theme.styles.blockPadding};
  & > img {
    position: absolute;
    right: 15rem;
    top: 2rem;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    width: 23rem;
    height: 26rem;
  }
  & > div {
    width: 32rem;
    padding: 1.5rem 0;
  }
  & > div > h1 {
    margin: 0;
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeDisplay};
    color: ${({ theme }) => theme.styles.colors[theme.theme].primary};
  }
  & > div > h2 {
    margin: 0;
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeRegular};
    color: ${({ theme }) => theme.styles.colors.light.background};
  }
  & > div > p {
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    color: ${({ theme }) => theme.styles.colors.light.background};
  }
`;

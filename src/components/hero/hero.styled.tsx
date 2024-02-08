import { Image } from '@/components';

import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.styles.colors[theme.theme].secondary};
  padding: 0 ${({ theme }) => theme.styles.blockSidePadding};
  color: ${({ theme }) => theme.styles.colors.light.background};
  & .restaurant-info {
    width: 30vw;
    padding: 1.5rem 0;
  }
  & .restaurant-info > h1 {
    margin: 0;
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeDisplay};
    color: ${({ theme }) => theme.styles.colors[theme.theme].primary};
  }
  & .restaurant-info > h2 {
    margin: 0;
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeRegular};
  }
  & .restaurant-info > p {
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeMedium};
  }
`;

export const HeroImg = styled(Image)`
  width: 23vw;
  height: 48vh;
  position: absolute;
  right: 15rem;
  top: 2rem;
`;

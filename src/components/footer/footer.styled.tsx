import { Image, NavLinks } from '@/components';

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: grid;
  background-color: ${({ theme }) =>
    theme.styles.colors[theme.theme].secondary};
  padding: 3rem ${({ theme }) => theme.styles.blockSidePadding};
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  color: ${({ theme }) => theme.styles.colors.light.background};
`;

export const FooterImg = styled(Image)`
  width: 13vw;
  height: 35vh;
`;
export const FooterNavLinks = styled(NavLinks)`
  & ul {
    flex-direction: column;
  }
  & ul li {
    padding: 0.5rem;
  }
`;

export const ContactInfo = styled.div`
  & h3 {
    margin: 0.5rem;
  }
  & ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  & ul li {
    padding: 0.5rem;
  }
  & ul li > a {
    text-decoration: none;
    color: inherit;
  }
`;

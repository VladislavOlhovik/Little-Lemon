import styled from 'styled-components';

export const NavContainer = styled.nav`
  & ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0 1rem 0 0;
  }
  & ul li a {
    text-decoration: inherit;
    color: inherit;
    padding: 1rem;
  }
`;

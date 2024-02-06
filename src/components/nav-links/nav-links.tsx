import * as SC from './nav-links.styled';

const links = [
  'Home',
  'About',
  'Menu',
  'Reservations',
  'Order Online',
  'Login',
];

export const NavLinks = () => {
  return (
    <SC.NavContainer>
      <ul>
        {links.map(el => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </SC.NavContainer>
  );
};

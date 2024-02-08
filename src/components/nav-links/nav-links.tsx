import * as SC from './nav-links.styled';

const links = [
  'Home',
  'About',
  'Menu',
  'Reservations',
  'Order Online',
  'Login',
];

interface INavLinks {
  className?: string;
}

export const NavLinks = ({ className }: INavLinks) => {
  return (
    <SC.NavContainer className={className}>
      <ul>
        {links.map(el => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </SC.NavContainer>
  );
};

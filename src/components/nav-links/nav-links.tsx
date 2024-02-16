import { Link } from 'react-router-dom';

import * as SC from './nav-links.styled';

const links = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/' },
  { title: 'Menu', link: '/' },
  { title: 'Reservations', link: '/booking' },
  { title: 'Order Online', link: '/' },
  { title: 'Login', link: '/' },
];

interface INavLinks {
  className?: string;
}

export const NavLinks = ({ className }: INavLinks) => {
  return (
    <SC.NavContainer className={className}>
      <ul>
        {links.map(({ link, title }) => {
          return (
            <li key={title}>
              <Link to={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </SC.NavContainer>
  );
};

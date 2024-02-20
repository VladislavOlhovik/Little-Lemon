import { NavLink } from 'react-router-dom';

import * as SC from './nav-links.styled';

const links = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Menu', link: '/menu' },
  { title: 'Reserve a Table', link: '/book' },
  { title: 'Order Online', link: '/food_order' },
  { title: 'Login', link: '/login' },
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
              <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : '')}
                to={link}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </SC.NavContainer>
  );
};

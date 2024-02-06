import { LogoSVG } from '@icons';
import { NavLinks, ThemeSwitch } from '@components';

import * as SC from './header.styled';

interface IHeader {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Header = (props: IHeader) => {
  return (
    <SC.HeaderContainer>
      <LogoSVG />
      <div>
        <NavLinks />
        <ThemeSwitch {...props} />
      </div>
    </SC.HeaderContainer>
  );
};

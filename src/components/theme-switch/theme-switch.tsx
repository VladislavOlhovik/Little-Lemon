import { MoonSvg, SunSvg } from '@/icons';

import * as SC from './theme-switch.styled';

interface IThemeSwitch {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeSwitch = ({ theme, toggleTheme }: IThemeSwitch) => {
  return (
    <SC.SwitchCotainer onClick={toggleTheme}>
      {theme === 'light' ? <MoonSvg /> : <SunSvg />}
    </SC.SwitchCotainer>
  );
};

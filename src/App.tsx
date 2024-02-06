import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header, Hero, Main } from '@/components';
import { GlobalStyle, styles } from '@/theme';

import './App.css';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeProvider theme={{ styles, theme }}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Main>
        <Hero />
      </Main>
      <footer>Footer</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

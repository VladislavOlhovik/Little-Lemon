import { useState } from 'react';

import { Footer, Header, Hero, Highlights, Main } from '@/components';
import { GlobalStyle, styles } from '@/theme';

import * as SC from 'styled-components';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };
  return (
    <SC.ThemeProvider theme={{ styles, theme }}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Main>
        <Hero />
        <Highlights />
      </Main>
      <Footer />
      <GlobalStyle />
    </SC.ThemeProvider>
  );
}

export default App;

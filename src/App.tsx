import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '@/components';
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
      <header>Little Lemon</header>
      <main>Main</main>
      <footer>Footer</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

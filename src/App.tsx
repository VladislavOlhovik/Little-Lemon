import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Header, Main } from '@/components';
import { GlobalStyle, styles } from '@/theme';
import { BookingPage, ConfirmedBooking, Home } from '@/pages';

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<BookingPage />} />
          <Route path='/book/:id' element={<ConfirmedBooking />} />
        </Routes>
      </Main>
      <Footer />
      <GlobalStyle />
    </SC.ThemeProvider>
  );
}

export default App;

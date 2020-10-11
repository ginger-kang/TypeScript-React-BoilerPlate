import React, { useState } from 'react';
import Router from './Router';

import { GlobalStyle } from './global-styles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useDarkMode } from './hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <DarkModeToggle theme={theme} toggleTheme={themeToggler} />
        <Router />
      </>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from 'react';
import Router from './Router';

import { GlobalStyle } from './global-styles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useDarkMode } from './hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
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

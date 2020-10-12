import React, { createContext } from 'react';
import Router from './Router';

import { GlobalStyle } from './global-styles';
import { lightTheme, darkTheme } from './theme';
import { useDarkMode } from './hooks/useDarkMode';
import { DefaultTheme } from 'styled-components';

interface ContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});

export default function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
        <Router />
      </>
    </ThemeContext.Provider>
  );
}

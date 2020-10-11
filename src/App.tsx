import React, { createContext } from 'react';
import Router from './Router';

import { GlobalStyle } from './global-styles';
import { lightTheme, darkTheme } from './theme';
import { useDarkMode } from './hooks/useDarkMode';

interface ContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: 'light',
  toggleTheme: () => {
    return null;
  },
});

export default function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
        <Router />
      </>
    </ThemeContext.Provider>
  );
}

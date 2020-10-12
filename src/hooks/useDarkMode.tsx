import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const setMode = (mode: DefaultTheme) => {
    mode === lightTheme
      ? window.localStorage.setItem('theme', 'light')
      : window.localStorage.setItem('theme', 'dark');
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    }
  }, []);

  return { theme, toggleTheme };
};

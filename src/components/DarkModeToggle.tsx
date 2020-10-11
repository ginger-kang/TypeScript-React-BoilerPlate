import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;

export default function DarkModeToggle(): ReactElement {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>{theme === 'light' ? '🌞' : '🌚'}</Button>
  );
}

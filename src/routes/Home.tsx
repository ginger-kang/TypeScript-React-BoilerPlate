import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from '../components/DarkModeToggle';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <HomeContainer>
      <DarkModeToggle />
      React Bolierplate with TypeScript
    </HomeContainer>
  );
}

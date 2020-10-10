import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
`;

export default function Home() {
  return <HomeContainer>Hello</HomeContainer>;
}

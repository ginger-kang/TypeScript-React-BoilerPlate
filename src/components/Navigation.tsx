import React, { useContext } from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import { ThemeContext } from '../App';

interface NavProps {
  navBar: string;
}

const NavContainer = styled('nav')<NavProps>`
  width: 100%;
  height: 10vh;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.07);
  background: ${({ navBar }) => navBar};
  transition: all 0.5s ease-in-out;
`;

const NavContentContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

interface TitleColorProps {
  mainColor: string;
}

const TitleContainer = styled('header')<TitleColorProps>`
  height: 100%;
  font-size: 2rem;
  font-weight: 900;
  color: ${({ mainColor }) => mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const InfoContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const LoginButton = styled.button`
  width: 90px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 30px;
  font-size: 14px;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ff0081;
  }
`;

const RegisterButton = styled.button`
  width: 90px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 30px;
  font-size: 14px;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ff0081;
  }
`;

export default function Navigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <NavContainer navBar={theme.navBar}>
      <NavContentContainer>
        <TitleContainer mainColor={theme.mainColor}>React</TitleContainer>
        <DarkModeToggle />
        <InfoContainer>
          <LoginButton>로그인</LoginButton>
          <RegisterButton>회원가입</RegisterButton>
        </InfoContainer>
      </NavContentContainer>
    </NavContainer>
  );
}

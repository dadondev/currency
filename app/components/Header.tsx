"use client";

import styled from "styled-components";
import Logo from "./Logo";
import Watch from "./Watch";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px 25px;
  width: 100%;
  z-index: 100;
  background: linear-gradient(92.67deg, #bfc3fc 0.11%, #a2c3fc 100%);
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 40px 40px;

  @media (width>=768px) {
    padding-inline: 30px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Watch />
    </HeaderContainer>
  );
};

export default Header;

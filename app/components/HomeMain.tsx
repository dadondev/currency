"use client";

import styled from "styled-components";
import Categories from "./Categories";

const Container = styled.main`
  width: 100%;
  padding: 20px 15px 0;

  @media (width>=768px) {
    padding-top: 35px;
  }
`;

const CopyRight = styled.h1`
  text-align: center;
  padding: 20px;
  color: ${(p) => p.theme.colors.black};
`;
const HomeMain = () => {
  return (
    <Container>
      <Categories />
      <CopyRight>Ushbu malumot markaziy bankning saytida olindi</CopyRight>
    </Container>
  );
};

export default HomeMain;

"use client";

import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import theme from "@/general/utils/theme";
import HomeMain from "./HomeMain";

const Container = styled.div`
  height: 100%;
  background-color: ${(p) => p.theme.colors.bg};
  padding-top: 70px;
  width: 100%;
`;

const HomeContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <HomeMain />
      </Container>
    </ThemeProvider>
  );
};

export default HomeContainer;

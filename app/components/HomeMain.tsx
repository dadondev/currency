"use client";

import styled from "styled-components";
import Categories from "./Categories";

const Container = styled.main`
  width: 100%;
  padding: 20px 15px 0;
`;

const HomeMain = () => {
  return (
    <Container>
      <Categories />
    </Container>
  );
};

export default HomeMain;

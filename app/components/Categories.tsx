"use client";

import styled from "styled-components";
import Cards from "./Cards";

const Title = styled.span`
  font-size: 1.5rem;
  @media (width>=768px) {
    font-size: 2rem;
  }
`;

const Container = styled.div``;
const Categories = () => {
  return (
    <Container>
      <Title>Valyutalar</Title>
      <Cards />
    </Container>
  );
};

export default Categories;

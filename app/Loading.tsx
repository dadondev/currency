"use client";

import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loading = () => {
  return (
    <Container>
      <img src="/loading.gif" alt="loading" />
    </Container>
  );
};

export default Loading;

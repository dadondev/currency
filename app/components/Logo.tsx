"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const LogoStyled = styled.article`
  display: grid;
  a {
    text-decoration: none;
    color: #131313;
    font-size: 2.4rem;
    font-weight: 700;
    color: #343434;

    @media (width>=768px) {
      font-size: 3rem;
    }
  }
`;

const Logo = () => {
  return (
    <LogoStyled>
      <Link href={"/"}>Tahlil.uz</Link>
    </LogoStyled>
  );
};

export default Logo;

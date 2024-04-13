"use client";

import styled, { css } from "styled-components";
import Cards from "./Cards";
import { useContext, useState } from "react";
import Filter from "@/context/filter";

interface ITip {
  isactive?: string;
  show?: string;
}

const TopHeader = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  @media (width>=768px) {
    font-size: 2rem;
  }
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
`;

const FilterTips = styled.article<ITip>`
  width: 105px;
  border-radius: 10px;
  transform: translateY(calc(-100% - 100px));
  overflow: hidden;
  transition: 500ms all;
  background-color: #efefef;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  position: absolute;
  right: 0;
  ${(p) => {
    if (p.show) {
      return css`
        transform: translateY(20%);
      `;
    }
  }}
`;

const Tip = styled.p<ITip>`
  padding: 8px 15px;
  font-size: 1.6rem;
  background-color: ${(p) => (p.isactive ? "#fff" : "#efefe")};
  cursor: pointer;
  transition: 500ms all;
  text-transform: capitalize;
  &:hover {
    ${(p) => {
      if (!p.isactive) {
        return css`
          background-color: #fefefe;
        `;
      }
    }}
  }
`;
const Categories = () => {
  const [show, setShow] = useState("");
  const { filter, setFilter } = useContext(Filter);
  return (
    <Container>
      <TopHeader>
        <Title>Valyutalar</Title>
        <Title
          onClick={() => {
            if (show.length > 0) {
              setShow("");
            } else {
              setShow("sallom");
            }
          }}
        >
          Filterlash
          <svg
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
          </svg>
        </Title>
      </TopHeader>
      <FilterTips show={show}>
        <Tip
          isactive={filter === "all" ? "active" : ""}
          onClick={() => {
            setFilter("all");
            setShow("");
          }}
        >
          Hammasi
        </Tip>
        <Tip
          isactive={filter === "profit" ? "active" : ""}
          onClick={() => {
            setFilter("profit");
            setShow("");
          }}
        >
          ko`tarilish
        </Tip>
        <Tip
          isactive={filter === "loss" ? "active" : ""}
          onClick={() => {
            setFilter("loss");
            setShow("");
          }}
        >
          tushish
        </Tip>
      </FilterTips>
      <Cards />
    </Container>
  );
};

export default Categories;

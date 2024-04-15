"use client";
import Filter from "@/context/filter";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const Content = styled.div`
  max-width: 370px;
  display: flex;
  transition: 500ms all;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 15px 60px rgba(107, 107, 107, 0.12);
  span {
    text-transform: uppercase;
    font-weight: 700;
    color: ${(p) => p.theme.colors.black};
    font-size: 2rem;
  }
  &:active {
    transform: scale(90%);
  }

  @media (width>=1024px) {
    &:hover {
      transform: scale(90%);
    }
  }
`;

const Tips = styled.article`
  align-items: center;
  display: flex;
  gap: 10px;
  img {
    width: 50px;
  }
`;

const Cards = () => {
  const { filter } = useContext(Filter);
  const [data, setData] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<any[]>([]);
  const { setCurrency, setShow } = useContext(Filter);
  const getData = async () => {
    const req = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/", {
      cache: "no-cache",
    });
    const res = await req.json();
    setData(res);
  };
  const handleClick = (data: object) => {
    setCurrency(data);
    setShow(true);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilterData(data);
    } else if (filter === "profit") {
      setFilterData(data.filter((e) => e.Diff > 0));
    } else {
      setFilterData(data.filter((e) => e.Diff <= 0));
    }
  }, [filter, data]);
  return (
    <Container>
      {filterData.length > 0 &&
        filterData.map((e, i) => (
          <Content key={i} onClick={() => handleClick(e)}>
            <span>{e.Ccy}</span>
            <Tips>
              <span>{e.Rate}</span>
              <img
                src={e.Diff > 0 ? "/increase.svg" : "/decrease.svg"}
                alt="increse"
              />
            </Tips>
          </Content>
        ))}
    </Container>
  );
};

export default Cards;

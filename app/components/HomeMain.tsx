"use client";

import styled, { keyframes } from "styled-components";
import Categories from "./Categories";
import Filter from "@/context/filter";
import { useEffect, useRef, useState } from "react";
const slideUp = keyframes`
  from{
    transform: translate(-50%, 1%);
  }to{
    transform: translateY(-50%,0%);
  }
`;
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

const Dialog = styled.dialog`
  min-width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  position: relative;
  background-color: transparent;
  min-height: 100%;
`;
const Card = styled.div`
  width: 301px;
  background-color: #ffff;
  border-radius: 10px;
  position: fixed;
  top: 70%;
  left: 50%;
  transition: 500ms all;
  transform: translate(-50%, -70%);
  animation: ${slideUp} 500ms forwards;
  padding: 20px 16px;
  & > h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 10px;
  }
`;
const MiniContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  div {
    display: flex;
  }
`;
const TextField = styled.input`
  width: 100%;
  margin: 0 auto;
  padding: 10px 16px 10px 50px;
  font-size: 1.8rem;
  outline: none;
  text-align: right;
  transition: 500ms all;
  border-radius: 10px;
  border: 2px solid #00c2ff;

  &:focus {
    border: 2px solid #2548c2;
  }
`;
const Currency = styled.span`
  font-size: 1.8rem;
  position: absolute;
  text-transform: uppercase;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
const Span = styled.span`
  font-size: 2rem;
`;
const Paragraph = styled.p`
  font-size: 2rem;
  flex-grow: 1;
  text-align: right;
`;
const HomeMain = () => {
  const [filter, setFilter] = useState("all");
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [input, setInput] = useState<string>("");
  const [inputSecond, setInputSecond] = useState<string>("1");
  const [currency, setCurrency] = useState<
    | {
        Ccy: string;
        Rate: string;
      }
    | undefined
  >();
  useEffect(() => {
    if (show) {
      modalRef.current?.showModal();
    }

    if (show) {
      setInputSecond("1");
    }
  }, [show]);
  useEffect(() => {
    if (input.split("").includes("-") || +input < 0 || input[0] === "0") {
      setInput("");
    }
    if (
      inputSecond.split("").includes("-") ||
      +inputSecond < 0 ||
      inputSecond[0] === "0"
    ) {
      setInputSecond("");
    }
  }, [input, inputSecond]);
  useEffect(() => {
    setInput(currency?.Rate ? currency?.Rate : "");
  }, [currency]);

  return (
    <Filter.Provider
      value={{
        filter,
        setFilter,
        setShow,
        setCurrency,
        show,
      }}
    >
      <Container>
        <Categories />
        <CopyRight>Ushbu malumot markaziy bankning saytida olindi</CopyRight>
      </Container>
      <Dialog
        ref={modalRef}
        onClick={(e) => {
          e.stopPropagation();
          setShow(false);
          modalRef.current?.close();
        }}
      >
        <Card onClick={(e) => e.stopPropagation()}>
          <h1>Calc</h1>
          <MiniContainer>
            <div>
              <Span>Jami:</Span>
              <Paragraph>{+input * +inputSecond} uzs</Paragraph>
            </div>
          </MiniContainer>
          <MiniContainer>
            <Currency>uzs</Currency>
            <TextField
              type="number"
              value={input}
              min={0}
              onChange={(e) => setInput(e.target.value)}
            />
          </MiniContainer>
          <MiniContainer>
            <Currency>{currency?.Ccy}</Currency>
            <TextField
              type="number"
              min={0}
              value={inputSecond}
              onChange={(e) => setInputSecond(e.target.value)}
            />
          </MiniContainer>
        </Card>
      </Dialog>
    </Filter.Provider>
  );
};
export default HomeMain;

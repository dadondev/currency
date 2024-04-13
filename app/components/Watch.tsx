"use client";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Clock = styled.h1`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.black};
`;

const Watch = () => {
  const [watch, setWatch] = useState("11:09");
  const intId = useRef<number | any>();
  const currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let time = `${hour > 9 ? hour : "0" + hour}:${
      minutes > 10 ? minutes : "0" + minutes
    }`;
    setWatch(time);
  };
  useEffect(() => {
    intId.current = setInterval(() => {
      currentTime();
    }, 30000);

    return () => {
      currentTime();
    };
  }, []);
  return <Clock>{watch}</Clock>;
};

export default Watch;

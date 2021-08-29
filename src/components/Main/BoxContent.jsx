import React, { useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "./infinite Scroll/InfiniteScroll";
import InfiniteScrollDois from "./infinite Scroll/InfiniteScrollDois";


const BoxContent = styled.section`
  display: flex;
  background-color: white;
  width: 100%;
  height: auto;
  color: white;
`;

export default () => {
  return (
    <BoxContent>
   
      <InfiniteScroll />

   
    </BoxContent>
  );
};

import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import BoxContent from "./BoxContent";


const ContainerMain = styled.main`
  display: flex;
  height: auto;
  flex-direction: column;
  width: auto;
  overflow: hidden;
`;

export function Main() {
  return (
    <ContainerMain>
      <Banner />
      <BoxContent/>
    </ContainerMain>
  );
}

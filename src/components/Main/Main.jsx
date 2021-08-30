import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import BoxContentHome from "./Homepage/BoxContentHome";



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
          <BoxContentHome/>
  
    </ContainerMain>
  );
}

import React from "react";
import styled from "styled-components";

import { GlobalFont } from "../UI/variables";
import BoxAnchors from "./BoxAnchors";
import BoxIcons from "./BoxIcons";
import SearchForm from "./SearchForm";

const ContainerHeader = styled.header`
  display: flex;
  background-color: black;
  width: 100vw;
  height: 82px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 2000;
  font-family: ${GlobalFont};

  .search {
    display: none;
  }


`;

export function Header() {
  return (
    <ContainerHeader>
      <BoxAnchors />

      <SearchForm />

      <BoxIcons />
    </ContainerHeader>
  );
}

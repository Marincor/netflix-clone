import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo, ItemLinks } from "../UI";
import Netflix from "../../assets/img/NetflixLogo.svg";

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 3rem;
  margin-top: 1.4rem;
  align-items: flex-end;
  justify-content: center;
`;

const Box1 = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 381px;
  height: 18px;
  margin-left: 2rem;
`;

export default () => {
  return (
    <Box1>
      <Link className="btn__link" to="/">
        <Logo src={Netflix} alt="Netflix-Logo" />
      </Link>

      <Menu>
        <li>
          <Link className="btn__link" to="/">
            <ItemLinks>Inicio</ItemLinks>
          </Link>
        </li>
        <li>
          <Link className="btn__link" to="/movies">
            <ItemLinks>Filmes</ItemLinks>
          </Link>
        </li>
        <li>
          <Link className="btn__link" to="/series">
            <ItemLinks>Séries</ItemLinks>
          </Link>
        </li>
        <li>
          <Link className="btn__link" to="/popular">
            {" "}
            <ItemLinks>Popular</ItemLinks>
          </Link>
        </li>
        <li>
          <ItemLinks href="/">Lista</ItemLinks>
        </li>
      </Menu>
    </Box1>
  );
};

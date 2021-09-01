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



  @media screen and (max-width:767px) {

    .hidden {

display: none;
}

   .mobH {

    display: none;
   }
   .netflix-logo{

    width: 80px;
   }
    
}



`;

const BoxVertical = styled.div `

@media screen and (max-width:767px) {

  width: 200px;
    height: 40vh;
    background-color: #be7979;



    
}

   

`

 const BoxAnchors = () => {
  return (
    <Box1>
        <BoxVertical className='hidden'/>
      <Link className="btn__link" to="/">
        <Logo className='netflix-logo' src={Netflix} alt="Netflix-Logo" />
      </Link>

      <Menu>

    
        <li>
          <Link className="btn__link mobH" to="/">
            <ItemLinks>Inicio</ItemLinks>
          </Link>
        </li>
        <li>
          <Link className="btn__link mobH" to="/movies">
            <ItemLinks>Filmes</ItemLinks>
          </Link>
        </li>
        <li>
          <Link className="btn__link mobH" to="/series">
            <ItemLinks>Séries</ItemLinks>
          </Link>
        </li>
        <li>
          <Link className="btn__link mobH" to="/popular">
            <ItemLinks>Popular</ItemLinks>
          </Link>
        </li>
        <li>
          <Link className="btn__link mobH" to="/lista/1">
          <ItemLinks href="/">Lista</ItemLinks>
          </Link>
         
        </li>
      </Menu>
    </Box1>
  );
};


export default BoxAnchors
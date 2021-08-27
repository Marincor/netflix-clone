import React from "react";
import styled from "styled-components";
import { BotaoDefault, Icons, ItemLinks, Logo, ProfileIcon } from "../UI/index";
import Netflix from "../../assets/img/NetflixLogo.svg";
import Search from "../../assets/img/search.svg";
import Gift from   "../../assets/img/gift.svg";
import Bell from  "../../assets/img/bell.svg";
import ProfileImg from   "../../assets/img/profileImg.svg";
import Setdown from "../../assets/img/setdown.svg";
import { GlobalFont } from "../UI/variables";


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
`;

const Box1 = styled.nav`
  display: flex;

  justify-content: space-between;

  width: 381px;
  height: 18px;
  margin-left: 2rem;

`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 3rem;
  margin-top: 1.4rem;
  align-items: flex-end;
  justify-content: center;

`;

const Box2 = styled.nav`
  width: 248px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
 
`;

export function Header() {
  return (
    <ContainerHeader>
      <Box1>
        <Logo src={Netflix} alt="Netflix-Logo" />
        <Menu>
          <li>
            {" "}
            <ItemLinks href="/">Inicio</ItemLinks>{" "}
          </li>
          <li>
            {" "}
            <ItemLinks href="/">Séries</ItemLinks>{" "}
          </li>
          <li>
            {" "}
            <ItemLinks href="/">Filmes</ItemLinks>{" "}
          </li>
          <li>
            <ItemLinks href="/">Popular</ItemLinks>{" "}
          </li>
          <li>
            <ItemLinks href="/">Lista</ItemLinks>{" "}
          </li>
        </Menu>
      </Box1>
      <Box2>
        <BotaoDefault>
          <Icons inverted src={Search} alt='search-icon' />
        </BotaoDefault>

        <BotaoDefault>  <Icons inverted src={Gift} alt='gift-icon'/>;</BotaoDefault>
          
          <BotaoDefault><Icons inverted src={Bell} alt='bell-icon'/>;</BotaoDefault>

          <BotaoDefault> 
              
              <ProfileIcon src={ProfileImg} alt='profile-default-img'/>
                <Icons primary inverted src={Setdown} alt='arrow-down'/>;
          
          </BotaoDefault>
            
      </Box2>
    </ContainerHeader>
  );
}

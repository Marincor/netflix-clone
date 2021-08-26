import React from "react";
import styled from "styled-components";
import { BotaoDefault, Icons, ItemLinks, Logo, ProfileIcon } from "../UI/variables";
import Netflix from "../../assets/img/NetflixLogo.svg";
import Search from "../../assets/img/search.svg";
import Gift from   "../../assets/img/gift.svg";
import Bell from  "../../assets/img/bell.svg";
import ProfileImg from   "../../assets/img/profileImg.svg";
import Setdown from "../../assets/img/setdown.svg";

const ContainerHeader = styled.header`
  display: flex;
  background-color: black;
  width: auto;
  height: 82px;
  align-items: center;
  justify-content: space-between;
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
            <ItemLinks href="/">Bombando</ItemLinks>{" "}
          </li>
          <li>
            <ItemLinks href="/">Lista</ItemLinks>{" "}
          </li>
        </Menu>
      </Box1>
      <Box2>
        <BotaoDefault>
          <Icons src={Search} alt='search-icon' />
        </BotaoDefault>

        <BotaoDefault>  <Icons src={Gift} alt='gift-icon'/>;</BotaoDefault>
          
          <BotaoDefault><Icons src={Bell} alt='bell-icon'/>;</BotaoDefault>

          <BotaoDefault> 
              
              <ProfileIcon src={ProfileImg} alt='profile-default-img'/>
                <Icons primary src={Setdown} alt='arrow-down'/>;
          
          </BotaoDefault>
            
      </Box2>
    </ContainerHeader>
  );
}

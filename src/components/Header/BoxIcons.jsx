import React from "react";
import styled from "styled-components";
import { BotaoDefault, Icons, ProfileIcon } from "../UI/index";
import Search from "../../assets/img/search.svg";
import Gift from "../../assets/img/gift.svg";
import Bell from "../../assets/img/bell.svg";
import ProfileImg from "../../assets/img/profileImg.svg";
import Setdown from "../../assets/img/setdown.svg";

const Box2 = styled.nav`
  width: 248px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default () => {
  function showSearchInput() {
    const searchInput = document.querySelector(`form`);
    searchInput.classList.remove("search");

  }

  // - - ----------HiddenSearchInput function \/  - -- - - -//

  window.addEventListener('click' ,(e) => {
    const searchInput = document.querySelector(`form`);
    const input = document.querySelector(`input`);
    const button = document.querySelector(`button`);
    

      if(e.path[0] != input && e.path[1] !=  button ) {

      searchInput.classList.add('search')
      }

    
     

  } )
  return (
    <Box2>
      <BotaoDefault>
        <Icons
          inverted
          onClick={showSearchInput}
          src={Search}
          alt="search-icon"
        />
      </BotaoDefault>

      <BotaoDefault>
        <Icons inverted src={Gift} alt="gift-icon" />;
      </BotaoDefault>

      <BotaoDefault>
        <Icons inverted src={Bell} alt="bell-icon" />;
      </BotaoDefault>

      <BotaoDefault>
        <ProfileIcon src={ProfileImg} alt="profile-default-img" />
        <Icons primary inverted src={Setdown} alt="arrow-down" />;
      </BotaoDefault>
    </Box2>
  );
};

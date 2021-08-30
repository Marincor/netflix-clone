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
    const searchInput = document.querySelector(`[data-search]`);
    searchInput.classList.remove("search");
  }

  return (
    <Box2>
      <BotaoDefault data-search-btn>
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

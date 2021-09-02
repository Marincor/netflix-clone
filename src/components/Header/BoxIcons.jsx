import React from "react";
import styled from "styled-components";
import { BotaoDefault,  Icons, ModalBox, ProfileIcon } from "../UI/index";
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


  @media screen and (max-width:767px) {

     .mobH {

      display: none;
     }
    
}

`;

const BoxIcons = () => {
 
 

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

      <BotaoDefault className='mobH'>
     
        <ModalBox>   <Icons inverted src={Gift} alt="gift-icon" />
                <h2 className='giftTitle'>Não há presentes no momento.</h2>
        </ModalBox>
      </BotaoDefault>

      <BotaoDefault className='mobH'>
       

        <ModalBox>    <Icons inverted src={Bell} alt="bell-icon" />;
                <h2 className='giftTitle'>Você não tem notificações.</h2>
        </ModalBox>
      </BotaoDefault>

      <BotaoDefault className='mobH'>
        <ModalBox primary={`1rem`}>       <ProfileIcon src={ProfileImg} alt="profile-default-img" />
        <Icons primary inverted src={Setdown} alt="arrow-down" />;;
                <h2 className='giftTitle'>Com a Netflix, você tem o controle!</h2>
        </ModalBox>
        
      </BotaoDefault>
    </Box2>
  );
};

export default BoxIcons
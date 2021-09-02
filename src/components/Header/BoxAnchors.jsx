import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo, ItemLinks, Icons, BotaoDefault } from "../UI";
import Netflix from "../../assets/img/NetflixLogo.svg";
import N from  "../../assets/img/n-logo.svg";
import Home from  "../../assets/img/home.svg";
import Movies from  "../../assets/img/movie.svg";
import Series from  "../../assets/img/tv.svg";
import Star from  "../../assets/img/star.svg";
import List from  "../../assets/img/list.svg";
import Lottie from "react-lottie";
import MenuBar from '../../assets/lotties/menuBar.json'
import { BoxLottie } from "../UI/variables";




const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 3rem;
  margin-top: 1.4rem;
  align-items: flex-end;
  justify-content: center;


  @media screen and (max-width:767px) {

     flex-direction: column;
     align-items: center;
     justify-content: space-around;
     position: relative;
     top: -2rem;
     right: 10rem;
     height: 200px;
     width: 200px;
     background-color: white;
     border-radius: 2rem;
     display: none;


    
    
}


`;

const Box1 = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 381px;
  height: 18px;
  margin-left: 2rem;



  @media screen and (max-width:767px) {

    align-items: flex-start;
    .btn-Hamburguer {

      display: flex;
    }

    .hidden {

display: none;
}

   .mobH {

    display: none;
   }

   .netflix-logo{

      display: none;
   }

   .modalMenu {

display: flex;

animation: animeHamburguer .2s;
}


@keyframes animeHamburguer {

    from {

      transform: translate3d(0,-60ox, 0);
    }

    to {

      transform: translate3d(0,0,0);
    }

}
    
}

@media screen and (min-width:768px) { 

  .netflix-logoMob{

display: none;
}

.btn-Hamburguer {

display: none;
}

}


`;





 const BoxAnchors = () => {

    // ---- Lottie animation config --- //

  const [bar, setBar] = useState({

    isStopped: false,
    isPaused: false,
   
})


const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: MenuBar,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

  function showMenu () {

    const menu = document.querySelector(`#hamburguer`)

    if (menu.classList.contains('modalMenu')) {

      menu.classList.remove('modalMenu')
      setBar({...bar, isStopped: !bar.isStopped, isPaused: !bar.isPaused})

        

    } else {

      menu.classList.add('modalMenu')
      setBar({...bar, isStopped: !bar.isStopped, isPaused: !bar.isPaused})

    }


    
    }

   
    

  


  return (
    <Box1>
      <BotaoDefault onClick={showMenu}  className='btn-Hamburguer'>
      <BoxLottie primary={'5rem'}>
      <Lottie 
	    options={defaultOptions}
        height={20}
        width={20}
        isStopped={bar.isStopped}
        isPaused={bar.isPaused}
        
      />
    </BoxLottie>

      </BotaoDefault>
      <Link className="btn__link" to="/">
        <Logo className='netflix-logo' src={Netflix} alt="Netflix-Logo" />
        <Logo className='netflix-logoMob' src={N} alt="Netflix-Logo" />
      </Link>

      <Menu id='hamburguer'>

    
        <li>
          <Link className="btn__link" to="/">
            <ItemLinks className="mobH">Inicio</ItemLinks>
            <Icons src={Home} alt='home-icon' />
          </Link>
        </li>
        <li>
          <Link className="btn__link" to="/movies">
            <ItemLinks className="mobH">Filmes</ItemLinks>
            <Icons src={Movies} alt='movie-icon' />
          </Link>
        </li>
        <li>
          <Link className="btn__link" to="/series">
            <ItemLinks className="mobH">Séries</ItemLinks>
            <Icons src={Series} alt='serie-icon' />
          </Link>
        </li>
        <li>
          <Link className="btn__link" to="/popular">
            <ItemLinks className="mobH">Popular</ItemLinks>
            <Icons src={Star} alt='popular-icon' />
          </Link>
        </li>
        <li>
          <Link className="btn__link" to="/lista/1">
          <ItemLinks className="mobH" >Lista</ItemLinks>
          <Icons src={List} alt='list-icon' />
          </Link>
         
        </li>
      </Menu>
    </Box1>
  );
};


export default BoxAnchors
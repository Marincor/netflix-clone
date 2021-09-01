import React from "react";
import { BotaoDefault, Box } from "../UI";
import OvniAnimation from '../../assets/lotties/animation404.json'
import HomeAnimation from '../../assets/lotties/home.json'
import Lottie from "react-lottie";
import { BoxLottie, GlobalFont } from "../UI/variables";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Orientations = styled.p `
   
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 10rem;
    color: white;
    font-family: ${GlobalFont};
    word-spacing: -0.2rem;

`

const Page404 = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: OvniAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const defaultOptionsHome = {
        loop: true,
        autoplay: true,
        animationData: HomeAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    

  return (
    <Box>
       <Link to='/'> <BotaoDefault>  <Lottie options={defaultOptionsHome} height={100} width={100} /></BotaoDefault></Link>
        <Orientations>
              Ops...Essa página não existe! Escolha outro endereço!
        </Orientations>
      
        <BoxLottie>
          <Lottie options={defaultOptions} height={500} width={500} />
        </BoxLottie>
         
    </Box>
  );
};


export default Page404;
import React from "react";
import { Box } from "../UI";
import OvniAnimation from '../../assets/lotties/animation404.json'
import Lottie from "react-lottie";
import { BoxLottie, GlobalFont } from "../UI/variables";
import styled from "styled-components";


const Orientations = styled.p `
   
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 10rem;
    color: white;
    font-family: ${GlobalFont};
    word-spacing: -0.2rem;

`

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: OvniAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    

  return (
    <Box>
        <Orientations>
              Ops...Essa página não existe! Escolha outro endereço pelo menu de navegação.
        </Orientations>
        <BoxLottie>
          <Lottie options={defaultOptions} height={500} width={500} />
        </BoxLottie>
         
    </Box>
  );
};

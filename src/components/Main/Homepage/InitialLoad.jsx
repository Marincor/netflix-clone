import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import NetflixLogoAnimation from "../../../assets/lotties/netflix-anime.json";
import { BoxLottie } from "../../UI/variables";

const Box = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  color: black;
`;

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NetflixLogoAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box>
      <BoxLottie>
        <Lottie options={defaultOptions} height={500} width={500} />
      </BoxLottie>
    </Box>
  );
};

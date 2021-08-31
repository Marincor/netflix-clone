import React from "react";
import Lottie from "react-lottie";
import NetflixLogoAnimation from "../../../assets/lotties/netflix-anime.json";
import { Box } from "../../UI";
import { BoxLottie } from "../../UI/variables";



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

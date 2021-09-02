import React, { useEffect } from "react";
import Lottie from "react-lottie";
import NetflixLogoAnimation from "../../../assets/lotties/netflix-anime.json";
import { Box } from "../../UI";
import { BoxLottie } from "../../UI/variables";
import NetflixMP3 from '../../../assets/audio/Netlifx-logo.mp3';
import NetflixOGG from '../../../assets/audio/Netlifx-logo.mp3';


const InitialLoad = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NetflixLogoAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };



  useEffect(()=>{




  })
 

   

  return (
    <Box>


              <audio  autoPlay   id='myautoload' >

        <source src={NetflixOGG} type="audio/ogg"/>
        <source src={NetflixMP3}  type="audio/mpeg"/>

        </audio>


      <BoxLottie>
        <Lottie  options={defaultOptions} height={450} width={450} />
      </BoxLottie>
    </Box>
  );
};


export default InitialLoad;
import React, { useEffect, useState } from "react";
import { ApiMoviesPage, ApiPopularTrendingPage } from "../../../services/services";
import { BotaoDefault } from "../../UI";
import {
  BoxArrows,
  BoxCardsItems,
  BoxContent,
  BoxLottie,
} from "../../UI/variables";
import Lottie from "react-lottie";
import arrowNext from "../../../assets/lotties/arrow-forward.json";
import arrowPrevious from "../../../assets/lotties/arrow-back.json";

export default () => {
  // Lottie config / /
  const [arrowForward, setArrowForward] = useState({
    isStopped: true,
    isPaused: false,
  });
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: arrowNext,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [arrowBack, setArrowBack] = useState({
    isStopped: true,
    isPaused: false,
  });

  const defaultOptions2 = {
    loop: false,
    autoplay: false,
    animationData: arrowPrevious,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // pages config //

  const [pageMovies, setPageMovies] = useState(1);
  const [movies, setMovies] = useState([]);

  function previousPage() {
    if (pageMovies != 1) {
      setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });

      setTimeout(() => {
        setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });
      }, 1);
      setPageMovies(pageMovies - 1);
    }
  }

 

  function nextPage() {
    if (pageMovies != 500) {
      setArrowForward({ ...arrowForward, isStopped: !arrowForward.isStopped });

      setTimeout(() => {
        setArrowForward({
          ...arrowForward,
          isStopped: !arrowForward.isStopped,
        });
      }, 1);

      setPageMovies(pageMovies + 1);
    }
  }

  useEffect(() => {
    ApiMoviesPage(pageMovies).then((data) => setMovies(data.results));


   
  });



  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>
      {movies.map((item, index) => {
        return (
          <>
            <BoxCardsItems
              key={index}
              poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            />
          </>
        );
      })}
      <BoxArrows>
        {" "}
        <BotaoDefault onClick={previousPage}>
          <BoxLottie className="teste">
            <Lottie
              options={defaultOptions2}
              height={50}
              width={50}
              isPaused={arrowBack.isPaused}
              isStopped={arrowBack.isStopped}
            />
          </BoxLottie>
        </BotaoDefault>
        <BotaoDefault onClick={nextPage}>
          <BoxLottie>
            <Lottie
              options={defaultOptions}
              height={50}
              width={50}
              isPaused={arrowForward.isPaused}
              isStopped={arrowForward.isStopped}
            />
          </BoxLottie>
        </BotaoDefault>
      </BoxArrows>
    </BoxContent>
  );
};

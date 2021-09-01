import React, { useEffect, useState } from "react";
import { ApiMoviesPage } from "../../../services/services";
import {
  BotaoList,
  BotaoDefault,
  BoxModalCard,
  ModalTitle,
  ModalInfo,
  ModalMetaDescription,
} from "../../UI";
import {
  BoxArrows,
  BoxCardsItems,
  BoxContent,
  BoxLottie,
} from "../../UI/variables";
import Lottie from "react-lottie";
import arrowNext from "../../../assets/lotties/arrow-forward.json";
import arrowPrevious from "../../../assets/lotties/arrow-back.json";
import { ListContext } from "../../../contexts/UserListContext";

const MoviesPage = () => {
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
    if (pageMovies !== 1) {
      setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });

      setTimeout(() => {
        setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });
      }, 1);
      setPageMovies(pageMovies - 1);
    }
  }

  function nextPage() {
    if (pageMovies !== 500) {
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
    ApiMoviesPage(pageMovies).then((data) => {
      setMovies(data.results);
    });
  });

  // - - -- - state of context list - - - -- //

  const { moviesId, setMoviesId } = React.useContext(ListContext);

  let vetorIdMovies = moviesId.arr || [];





  // ------ Add to list --- //

  function HandleList(e) {
    const currentMovie = e.target.parentElement.id;

    const idNotRepeated = moviesId.arr.find(
      (atribute) => atribute === currentMovie
    );

    if (idNotRepeated === undefined) {
      vetorIdMovies.push(currentMovie);

      setMoviesId({ ...moviesId, arr: vetorIdMovies });
      localStorage.setItem("userMovieList", JSON.stringify(vetorIdMovies));
    }
  }

  return (
    <BoxContent
      paddingTop={"10rem"}
      primaryColor={"black"}
      key={"ContentMovie"}
    >
      {movies.map((item, index) => {
        return (
          <div key={`divMovie - ${index}`}>
            <BoxCardsItems
              key={`BoxMovie - ${index}`}
              id={item.id}
              poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            >
              <BoxModalCard className='modal'>
                <ModalTitle  className='modal'>{item.title}</ModalTitle>
                <ModalInfo className='modal'>{item.original_title}</ModalInfo>
                <ModalMetaDescription className='modal'>{item.overview}</ModalMetaDescription>
              </BoxModalCard>
              <BotaoList key={`BotaoListMovie - ${index}`} onClick={HandleList}>
                ➕
              </BotaoList>
            </BoxCardsItems>
          </div>
        );
      })}
      <BoxArrows>
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

export default MoviesPage;

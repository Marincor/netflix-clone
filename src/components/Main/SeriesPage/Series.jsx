import React, { useEffect, useState } from "react";
import { ApiTvSeriesPage } from "../../../services/services";
import { BotaoDefault, BotaoList, BoxModalCard, ModalInfo, ModalMetaDescription, ModalTitle } from "../../UI";
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

const Series = () => {

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

  const [pageSeries, setPageSeries] = useState(1);
  const [movies, setMovies] = useState([]);

  function previousPage() {
    if (pageSeries !== 1) {
      setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });

      setTimeout(() => {
        setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });
      }, 1);
      setPageSeries(pageSeries - 1);
    }
  }

  function nextPage() {
    if (pageSeries !== 500) {
      setArrowForward({ ...arrowForward, isStopped: !arrowForward.isStopped });

      setTimeout(() => {
        setArrowForward({
          ...arrowForward,
          isStopped: !arrowForward.isStopped,
        });
      }, 1);

      setPageSeries(pageSeries + 1);
    }
  }

  useEffect(() => {
    ApiTvSeriesPage(pageSeries).then((data) => {
      setMovies(data.results);
    });
  });

  // - - -- - state of context list - - - -- //

  const { seriesId, setSeriesId } = React.useContext(ListContext);

  let vetorIdMovies = seriesId.arr || [];




  function HandleList(e) {
    const currentMovie = e.target.parentElement.id;

    const idNotRepeated =  seriesId.arr.find(atribute => atribute === currentMovie)

    if(idNotRepeated === undefined) { 

      vetorIdMovies.push(currentMovie);
   

      setSeriesId({ ...seriesId, arr: vetorIdMovies });
      localStorage.setItem('userMovieListSeries', JSON.stringify( vetorIdMovies))

    }
   
 
  
  }

  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"} key={'ContentMovie'}>
      {movies.map((item, index) => {
        return (
          <div key={`divMovie - ${index}`}>
            <BoxCardsItems
              key={`BoxMovie - ${index}`}
              id={item.id}
              poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            >
               <BoxModalCard className='modal'>
                <ModalTitle  className='modal'>{item.name}</ModalTitle>
                <ModalInfo className='modal'>{item.original_name}</ModalInfo>
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
export default Series;
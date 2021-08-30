import React, { useEffect, useState } from "react";
import { ApiSearchItens } from "../../../services/services";
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

  const [pageSeries, setPageSeries] = useState(1);
  const [contentSearch, setContentSearch] = useState('.')
  const [series, setSeries] = useState([]);

  function previousPage() {
    if (pageSeries != 1) {
      setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });

      setTimeout(() => {
        setArrowBack({ ...arrowBack, isStopped: !arrowBack.isStopped });
      }, 1);
      setPageSeries(pageSeries - 1);
    }
  }

  function nextPage() {
    if (pageSeries != 500) {
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
    ApiSearchItens(contentSearch,pageSeries).then((data) => setSeries(data.results));

        const form = document.querySelector('form');
        
        form.addEventListener('submit', (e)=>{
                e.preventDefault();
                const typedContent = e.target[0].value;
                const teste = sessionStorage.getItem('searchContent');

                console.log(teste)

               if(typedContent != '') {

              

                setContentSearch(typedContent)
                    
            
                   
               }

                
                

        })


  });

 

  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>
      {series.map((item, index) => {
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

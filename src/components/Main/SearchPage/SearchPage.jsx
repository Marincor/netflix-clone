import React, { useEffect, useState } from "react";
import { ApiSearchItens } from "../../../services/services";
import { BotaoDefault, BotaoList } from "../../UI";
import {
  BoxArrows,
  BoxCardsItems,
  BoxContent,
  BoxLottie,
} from "../../UI/variables";
import Lottie from "react-lottie";
import arrowNext from "../../../assets/lotties/arrow-forward.json";
import arrowPrevious from "../../../assets/lotties/arrow-back.json";
import { SearchContext } from "../../../contexts/SearchContext";
import { ListContext } from "../../../contexts/UserListContext";


const SearchPage = () => {
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

  const {searchInput} = React.useContext(SearchContext);

  

  const [pageSeries, setPageSeries] = useState(1);
  const [contentSearch, setContentSearch] = useState(searchInput.content || '.')
  const [series, setSeries] = useState([]);
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
    ApiSearchItens(contentSearch,pageSeries).then((data) => setSeries(data.results));
   
   
        const form = document.querySelector('form');
        
        form.addEventListener('submit', (e)=>{
                e.preventDefault();
                const typedContent = e.target[0].value;
            

               if(typedContent !== '') {

              
                setContentSearch(typedContent)
            
                  
            
                   
               }

                
                

        })

       
  }) ;



   // - - -- - state of context list - - - -- //

   const { seriesId, setSeriesId } = React.useContext(ListContext);

  
   const { moviesId, setMoviesId } = React.useContext(ListContext);

   let vetorIdMovies = moviesId.arr || [];
    let vetorIdSeries = seriesId.arr || [];

 
   function HandleList(e) {


     const currentMovie = e.target.parentElement.id;


    const currentMovieClass = e.target.parentElement;

     


    
    
 

     // --- if series -- //
if(!currentMovieClass.classList.contains('movie')) {
  vetorIdSeries.push(currentMovie);
  console.log('is a série')

  setSeriesId({ ...seriesId, arr: vetorIdSeries });
  localStorage.setItem('userMovieListSeries', JSON.stringify( vetorIdSeries))


}
   ///  movie --//
else {

  console.log('is a movie')
  vetorIdMovies.push(currentMovie);
   
  setMoviesId({ ...moviesId, arr: vetorIdMovies });
  localStorage.setItem('userMovieList', JSON.stringify( vetorIdMovies))


}

    
  
 
   }
 

  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>
      {series.map((item, index) => {
        return (
          <>
      
            <BoxCardsItems
              key={index}
              poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
              id={item.id}
              className={item.media_type}
              >
              <BotaoList key={`BotaoListMovie - ${index}`} onClick={HandleList}>

              ➕
              </BotaoList>
            </BoxCardsItems>
          </>
        );
      })}
      <BoxArrows>
       
        <BotaoDefault onClick={previousPage}>
          <p>teste</p>
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

export default SearchPage;
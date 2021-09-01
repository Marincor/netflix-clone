import React, { useEffect, useState } from "react";
import { ListContext } from "../../../contexts/UserListContext";
import { ApiPopularTrendingPage } from "../../../services/services";
import { BotaoList, BoxModalCard, ModalInfo, ModalMetaDescription, ModalTitle } from "../../UI";
import {

  BoxCardsItems,
  BoxContent,

} from "../../UI/variables";


const PopularPage = () => {
 

 

  // pages config //

 
  const [movies, setMovies] = useState([]);

 

  useEffect(() => {
    ApiPopularTrendingPage().then((data) => setMovies(data.results));


   
  });

 // - - -- - state of context list - - - -- //

 const { moviesId, setMoviesId } = React.useContext(ListContext);

 let vetorIdMovies = moviesId.arr || [];



 



 function HandleList(e) {
   const currentMovie = e.target.parentElement.id;


   const idNotRepeated =  moviesId.arr.find(atribute => atribute === currentMovie)

   if(idNotRepeated === undefined) { 

    vetorIdMovies.push(currentMovie);
  

    setMoviesId({ ...moviesId, arr: vetorIdMovies });
    localStorage.setItem('userMovieList', JSON.stringify( vetorIdMovies))

   }

  
 
 }

  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>
      {movies.map((item, index) => {
        return (
          <>
            <BoxCardsItems
              key={index}
              poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
              id={item.id}
              >
                <BoxModalCard className='modal'>
                <ModalTitle  className='modal'>{item.title ||item.name }</ModalTitle>
                <ModalInfo className='modal'>{item.original_title || item.original_name  }</ModalInfo>
                <ModalMetaDescription className='modal'>{item.overview}</ModalMetaDescription>
              </BoxModalCard>
              <BotaoList key={`BotaoListMovie - ${index}`} onClick={HandleList}>

              ➕
              </BotaoList>
            </BoxCardsItems>
          </>
        );
      })}
    
    </BoxContent>
  );
};


export default PopularPage;
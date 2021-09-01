import React, { useEffect, useState } from "react";
import { ApiMovieList } from "../../../services/services";
import { BoxCardsItems, BoxContent } from "../../UI/variables";
import { ListContext } from "../../../contexts/UserListContext";
import { BotaoDefault, BoxLine, TitleSection } from "../../UI";






const ListPage =  () => {
  // pages config //

  const { moviesId } = React.useContext(ListContext);
  const [moviePoster, setMoviePoster] = useState([]);

  useEffect(() => {
    // request the url of img poster //

    const posterReqs = moviesId.arr.map((item) => {
      return ApiMovieList(item).then((data) => data.poster_path);
    });

    Promise.all(posterReqs).then((posters) => {
      const UserDataEntry = posters || [];
      setMoviePoster(UserDataEntry);
    });
  });


  // welcome //
let listMessage = 'Essa é a sua lista de filmes:'

  if (moviesId.arr.length === 0) {


    listMessage = "Sua lista de filmes está vazia... Adicione algum filme ou série a ela clicando no botão + localizado nos cards!"
  }



  function deleteCard(e) {

    // card clicked //
    const currentIdMovieTarget = e.target.parentElement.id;


  // delete from state //  
    const vetor = moviesId.arr;

    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === currentIdMovieTarget) {
        vetor.splice(i, 1);
      }

    }

    
  // delete from localstorage //  

    const currentList = JSON.parse( localStorage.getItem('userMovieList'))

    const vetorTwo = currentList;


    for (let i = 0; i < vetorTwo.length; i++) {
        if (vetorTwo[i] === currentIdMovieTarget) {
            vetorTwo.splice(i, 1);
            localStorage.setItem('userMovieList', JSON.stringify(vetorTwo))
        }
   
      }
 

  }

  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>

            <BoxLine>
                <TitleSection>{listMessage}</TitleSection>
            </BoxLine>
         
      {moviePoster.map((item, index) => {
        return (
          <>
            <BoxCardsItems
              key={index}
              id={moviesId.arr[index]}
              poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item}`}
            >
              <BotaoDefault onClick={deleteCard}>X</BotaoDefault>
            </BoxCardsItems>
          </>
        );
      })}
    </BoxContent>
  );
};


export default ListPage;
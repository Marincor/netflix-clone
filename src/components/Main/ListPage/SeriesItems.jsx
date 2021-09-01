
import React , {useState, useEffect}from 'react';
import { ListContext } from '../../../contexts/UserListContext';
import { ApiSeriesList } from '../../../services/services';
import { BotaoList } from '../../UI';
import { BoxCardsItems } from '../../UI/variables';


const SeriesItems = () =>{

 // pages config //

 const { seriesId } = React.useContext(ListContext);
 const [seriesPoster, setSeriesPoster] = useState([]);




 useEffect(() => {


   // request the url of img poster //


// ---------- Series ---------- /

const posterReqs2 = seriesId.arr.map((item) => {
    return ApiSeriesList(item).then((data) => data.poster_path);
  });

  Promise.all(posterReqs2).then((posters) => {
    const UserDataEntry = posters || [];
    setSeriesPoster(UserDataEntry);
  });

   





 });




 function deleteCard(e) {

   // card clicked //
   const currentIdTarget = e.target.parentElement.id;


 // delete from state //  

 // --- series -----//
   const vetor = seriesId.arr;
  

   for (let i = 0; i < vetor.length; i++) {

     if (vetor[i] === currentIdTarget) {

       vetor.splice(i, 1);

     }
     

   }


   
   
 // delete from localstorage //  

 // --- series ------ //

   const currentList = JSON.parse( localStorage.getItem('userMovieListSeries'))
  

   const vetorTwo = currentList;


   for (let i = 0; i < vetorTwo.length; i++) {
       if (vetorTwo[i] === currentIdTarget) {

           vetorTwo.splice(i, 1);
           localStorage.setItem('userMovieListSeries', JSON.stringify(vetorTwo))

       }
  
     }



 }


    return(
        <>
             {seriesPoster.map((item, index) => {
            return (
              <>
                <BoxCardsItems
                  key={index}
                  id={seriesId.arr[index]}
                  poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item}`}
                >
                  <BotaoList onClick={deleteCard}>❌</BotaoList>
                </BoxCardsItems>
              </>
            );
          })}
        
         </>
       


    )
}

export default SeriesItems;
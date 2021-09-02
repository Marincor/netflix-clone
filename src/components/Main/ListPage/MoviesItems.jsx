
import React , {useState, useEffect}from 'react';
import { ListContext } from '../../../contexts/UserListContext';
import { ApiMovieList } from '../../../services/services';
import { BotaoList, BoxModalCard, ModalInfo, ModalMetaDescription, ModalTitle } from '../../UI';
import { BoxCardsItems } from '../../UI/variables';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoviesItems = () =>{


  // -- Toastify config -- //

  const notify = () =>
    toast.success("Filme excluído da lista", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

 // pages config //

 const { moviesId } = React.useContext(ListContext);
 const [movies, setMovies] = useState([]);




 useEffect(() => {


   // request the url of img poster //


// ---------- Movies ---------- /

     const posterReqs = moviesId.arr.map((item) => {
       return ApiMovieList(item).then((data) => data);
     });
 
     Promise.all(posterReqs).then((data) => {
       const UserDataEntry = data || [];
       setMovies(UserDataEntry);
     });


   





 });




 function deleteCard(e) {

   // card clicked //
   const currentIdTarget = e.target.parentElement.id;


 // delete from state //  

 // --- Movies -----//
   const vetor = moviesId.arr;
  

   for (let i = 0; i < vetor.length; i++) {

     if (vetor[i] === currentIdTarget) {

       vetor.splice(i, 1);

     }
     

   }


   
   
 // delete from localstorage //  

 // --- Movies ------ //

   const currentList = JSON.parse( localStorage.getItem('userMovieList'))
  

   const vetorTwo = currentList;


   for (let i = 0; i < vetorTwo.length; i++) {
       if (vetorTwo[i] === currentIdTarget) {

           vetorTwo.splice(i, 1);
           localStorage.setItem('userMovieList', JSON.stringify(vetorTwo))
          notify();
       }
  
     }



 }


    return(
        <>
             {movies.map((item, index) => {
            return (
              <>
               <div>
                  <ToastContainer
                    className="toaster"
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
                <BoxCardsItems
                  key={index}
                  id={moviesId.arr[index]}
                  poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                ><BoxModalCard className='modal'>
                <ModalTitle  className='modal'>{item.title}</ModalTitle>
                <ModalInfo className='modal'>{item.original_title}</ModalInfo>
                <ModalMetaDescription className='modal'>{item.overview}</ModalMetaDescription>
              </BoxModalCard>
                  <BotaoList onClick={deleteCard}>❌</BotaoList>
                </BoxCardsItems>
              </>
            );
          })}
        
         </>
       


    )
}

export default MoviesItems;